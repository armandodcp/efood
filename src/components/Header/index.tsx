import { useLocation } from 'react-router-dom'
import { Cart, HeaderContainer, HomeLink, Logo, Menu } from './styles'
import logo from '../../assets/images/logo.svg'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

const Header = () => {
  const path = useLocation().pathname
  const navigation = path !== '/restaurantes'
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderContainer>
      <div className="container">
        <Menu $visible={navigation}>
          <HomeLink to="/restaurantes">Restaurantes</HomeLink>
        </Menu>
        <HomeLink to="/restaurantes">
          <Logo src={logo} alt="EFOOD" />
        </HomeLink>
        <Cart $visible={navigation} onClick={openCart}>
          {items.length} produto(s) no carrinho
        </Cart>
      </div>
    </HeaderContainer>
  )
}

export default Header
