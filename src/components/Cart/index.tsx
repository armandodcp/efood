import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { RootReducer } from '../../store'
import { clear, close, remove } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'
import { getTotalPrice, parseToBrl } from '../../utils'
import InputMask from 'react-text-mask'
import Button from '../Button'
import * as S from './styles'
import * as Yup from 'yup'

const Cart = () => {
  const [formDelivery, setFormDelivery] = useState(false)
  const [formPayment, setFormPayment] = useState(false)
  const [purchase, { data, isSuccess, isLoading, reset }] =
    usePurchaseMutation()
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const totalPrice = getTotalPrice(items)

  const navigate = useNavigate()

  const completePurchase = () => {
    reset()
    dispatch(clear())
    closeCart()
    setFormDelivery(false)
    setFormPayment(false)
    navigate('/restaurantes')
  }

  const form = useFormik({
    initialValues: {
      takerName: '',
      addressDelivery: '',
      cityAddress: '',
      zipCode: '',
      numberAddress: '',
      complementAddress: '',
      cardDisplayName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      takerName: Yup.string()
        .min(3, 'O nome precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      addressDelivery: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cityAddress: Yup.string().required('O campo é obrigatório'),
      zipCode: Yup.string()
        .min(9, 'CEP inválido')
        .required('O campo é obrigatório'),
      numberAddress: Yup.string()
        .min(1, 'O número precisa ter pelo menos 1 caractere')
        .required('O campo é obrigatório'),
      cardDisplayName: Yup.string()
        .min(3, 'O nome precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      cardCode: Yup.string().required('O campo é obrigatório'),
      expiresMonth: Yup.string().required('O campo é obrigatório'),
      expiresYear: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.takerName,
          address: {
            description: values.addressDelivery,
            city: values.cityAddress,
            zipCode: values.zipCode,
            number: Number(values.numberAddress),
            complement: values.complementAddress
          }
        },
        payment: {
          card: {
            name: values.cardDisplayName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        }))
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const checkFormAddressHasError = () => {
    const requiredFields = [
      'takerName',
      'addressDelivery',
      'cityAddress',
      'zipCode',
      'numberAddress'
    ]
    const hasError = requiredFields.some(
      (fieldName) => fieldName in form.errors
    )

    if (hasError) {
      requiredFields.forEach((fieldName) => {
        form.touched[fieldName as keyof typeof form.touched] = true
        checkInputHasError(fieldName)
      })
    }
    return hasError
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {isSuccess && data ? (
          <S.FormDelivery>
            <h3>Pedido realizado - {data.orderId}</h3>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <Button
              title="Clique aqui para concluir"
              onClick={completePurchase}
              type="button"
            >
              Concluir
            </Button>
          </S.FormDelivery>
        ) : (
          <form onSubmit={form.handleSubmit}>
            {!formDelivery && (
              <>
                <ul>
                  {items.map((item) => (
                    <S.CartItem key={item.id}>
                      <img src={item.foto} alt={item.nome} />
                      <div>
                        <h3>{item.nome}</h3>
                        <span>{parseToBrl(item.preco)}</span>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        type="button"
                      />
                    </S.CartItem>
                  ))}
                </ul>
                {totalPrice === 0 ? (
                  <S.Prices>
                    <div className="empty-cart">
                      Não há produtos no carrinho
                    </div>
                  </S.Prices>
                ) : (
                  <>
                    <S.Prices>
                      <div>Valor total</div> {parseToBrl(totalPrice)}
                    </S.Prices>
                    <Button
                      title="Clique aqui para continuar com a entrega"
                      onClick={() => setFormDelivery(true)}
                      type="button"
                    >
                      Continuar com a entrega
                    </Button>
                  </>
                )}
              </>
            )}
            {formDelivery && !formPayment && (
              <>
                <S.FormDelivery>
                  <h3>Entrega</h3>
                  <label htmlFor="takerName">Quem irá receber</label>
                  <input
                    id="takerName"
                    type="text"
                    name="takerName"
                    value={form.values.takerName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('takerName') ? 'error' : ''}
                  />
                  <label htmlFor="addressDelivery">Endereço</label>
                  <input
                    id="addressDelivery"
                    type="text"
                    name="addressDelivery"
                    value={form.values.addressDelivery}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('addressDelivery') ? 'error' : ''
                    }
                  />
                  <label htmlFor="cityAddress">Cidade</label>
                  <input
                    id="cityAddress"
                    type="text"
                    name="cityAddress"
                    value={form.values.cityAddress}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cityAddress') ? 'error' : ''}
                  />
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="zipCode">CEP</label>
                      <InputMask
                        id="zipCode"
                        type="text"
                        name="zipCode"
                        value={form.values.zipCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('zipCode') ? 'error' : ''}
                        mask={[
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                          '-',
                          /\d/,
                          /\d/,
                          /\d/
                        ]}
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="numberAddress">Número</label>
                      <input
                        id="numberAddress"
                        type="text"
                        name="numberAddress"
                        value={form.values.numberAddress}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('numberAddress') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                  </S.Row>
                  <label htmlFor="complementAddress">
                    Complemento (opcional)
                  </label>
                  <input
                    id="complementAddress"
                    type="text"
                    name="complementAddress"
                    value={form.values.complementAddress}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('complementAddress') ? 'error' : ''
                    }
                  />
                </S.FormDelivery>
                <S.ButtonGroup>
                  <Button
                    title="Clique aqui para continuar com o pagamento"
                    onClick={() => setFormPayment(true)}
                    type="button"
                  >
                    Continuar com o pagamento
                  </Button>
                </S.ButtonGroup>
                <S.ButtonGroup>
                  <Button
                    title="Clique aqui para voltar para o carrinho"
                    onClick={() => setFormDelivery(false)}
                    type="button"
                  >
                    Voltar para o carrinho
                  </Button>
                </S.ButtonGroup>
              </>
            )}
            {formPayment && (
              <>
                <S.FormDelivery>
                  <h3>Pagamento - Valor a pagar {parseToBrl(totalPrice)}</h3>
                  <label htmlFor="cardDisplayName">Nome no cartão</label>
                  <input
                    id="cardDisplayName"
                    type="text"
                    name="cardDisplayName"
                    value={form.values.cardDisplayName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('cardDisplayName') ? 'error' : ''
                    }
                  />
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="cardNumber" className="input-card">
                        Número do cartão
                      </label>
                      <InputMask
                        id="cardNumber"
                        type="text"
                        name="cardNumber"
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('cardNumber') ? 'error' : ''
                        }
                        mask={[
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                          ' ',
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                          ' ',
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                          ' ',
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/
                        ]}
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="cardCode">CVV</label>
                      <InputMask
                        id="cardCode"
                        type="text"
                        name="cardCode"
                        value={form.values.cardCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('cardCode') ? 'error' : ''
                        }
                        mask={[/\d/, /\d/, /\d/]}
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="expiresMonth">Mês de vencimento</label>
                      <InputMask
                        id="expiresMonth"
                        type="text"
                        name="expiresMonth"
                        value={form.values.expiresMonth}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('expiresMonth') ? 'error' : ''
                        }
                        mask={[/\d/, /\d/]}
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="expiresYear">Ano de vencimento</label>
                      <InputMask
                        id="expiresYear"
                        type="text"
                        name="expiresYear"
                        value={form.values.expiresYear}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('expiresYear') ? 'error' : ''
                        }
                        mask={[/\d/, /\d/, /\d/, /\d/]}
                      />
                    </S.InputGroup>
                  </S.Row>
                </S.FormDelivery>
                <S.ButtonGroup>
                  <Button
                    title="Clique aqui para finalizar o pagamento"
                    onClick={() => {
                      form.handleSubmit()
                      if (checkFormAddressHasError()) {
                        setFormPayment(false)
                      }
                    }}
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading
                      ? 'Finalizando pagamento...'
                      : 'Finalizar pagamento'}
                  </Button>
                </S.ButtonGroup>
                <S.ButtonGroup>
                  <Button
                    title="Clique aqui para editar o endereço"
                    onClick={() => setFormPayment(false)}
                    type="button"
                  >
                    Voltar para a edição de endereço
                  </Button>
                </S.ButtonGroup>
              </>
            )}
          </form>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
