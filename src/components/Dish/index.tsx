import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'
import Button from '../Button'
import close from '../../assets/images/others/close.png'
import * as S from './styles'

type Props = {
  restaurant: number
  image: string
  price: number
  id: number
  title: string
  description: string
  portion: string
  button: string
}

interface ModalState extends Menu {
  isVisible: boolean
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const Dish = ({
  restaurant,
  image,
  price,
  id,
  title,
  description,
  portion,
  button
}: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 172) {
      return description.slice(0, 168) + ' ...'
    }
    return description
  }

  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    foto: '',
    preco: 0,
    id: 0,
    nome: '',
    descricao: '',
    porcao: ''
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      foto: '',
      preco: 0,
      id: 0,
      nome: '',
      descricao: '',
      porcao: ''
    })
  }

  const dispatch = useDispatch()

  const addToCart = () => {
    const dish: Menu = {
      foto: image,
      preco: price,
      id: id,
      nome: title,
      descricao: description,
      porcao: portion
    }

    dispatch(add({ restaurant, dish }))
    closeModal()
    dispatch(open())
  }

  return (
    <>
      <S.Card>
        <S.Image src={image} alt={title} />
        <S.TitleContainer>
          <S.Title>{title}</S.Title>
        </S.TitleContainer>
        <S.Description>{getDescription(description)}</S.Description>
        <Button
          type="button"
          title="Clique aqui para mais detalhes"
          onClick={() => {
            setModal({
              isVisible: true,
              foto: image,
              preco: price,
              id: id,
              nome: title,
              descricao: description,
              porcao: portion
            })
          }}
        >
          {button}
        </Button>
      </S.Card>
      <S.Modal className={modal.isVisible ? 'visivel' : ''}>
        <S.ModalContent className="container">
          <header>
            <img
              src={close}
              title="Fechar"
              onClick={() => {
                closeModal()
              }}
            />
          </header>
          <S.ContentContainer>
            <S.ImageModal src={image} alt={title} />
            <S.TextContent>
              <h3>{title}</h3>
              <p>{description}</p>
              <div>{portion}</div>
              <Button
                type="button"
                title="Adicionar ao carrinho"
                size="small"
                onClick={addToCart}
              >
                {`Adicionar ao carrinho - ${parseToBrl(price)}`}
              </Button>
            </S.TextContent>
          </S.ContentContainer>
        </S.ModalContent>
        <div
          onClick={() => {
            closeModal()
          }}
          className="overlay"
        ></div>
      </S.Modal>
    </>
  )
}

export default Dish
