import { Overlay, CartContainer, Sidebar, Prices, CartItem } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formatPrice } from '../Dish'
import Button from '../Button'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((calculator, currentValue) => {
      return (calculator += currentValue.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const totalPrice = getTotalPrice()

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formatPrice(item.preco)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        {totalPrice === 0 ? (
          <Prices>
            <div className="empty-cart">Não há produtos no carrinho</div>
          </Prices>
        ) : (
          <>
            <Prices>
              <div>Valor total</div> {formatPrice(totalPrice)}
            </Prices>
            <Button
              title="Clique aqui para continuar com a entrega"
              type="button"
            >
              Continuar com a entrega
            </Button>
          </>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
