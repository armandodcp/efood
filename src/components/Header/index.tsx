import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'
import logo from '../../assets/images/logo.svg'
import * as S from './styles'

const Header = () => {
  const path = useLocation().pathname
  const navigation = path !== '/restaurantes'
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderContainer>
      <div className="container">
        <S.Menu $visible={navigation}>
          <S.HomeLink to="/restaurantes">Restaurantes</S.HomeLink>
        </S.Menu>
        <S.HomeLink to="/restaurantes">
          <S.Logo src={logo} alt="EFOOD" />
        </S.HomeLink>
        <S.Cart $visible={navigation} onClick={openCart}>
          {items.length} produto(s) no carrinho
        </S.Cart>
      </div>
    </S.HeaderContainer>
  )
}

export default Header
