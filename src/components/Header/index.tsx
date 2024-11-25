import { useLocation } from 'react-router-dom'
import { Cart, HeaderContainer, HomeLink, Logo, Menu } from './styles'
import logo from '../../assets/images/logo.svg'

const Header = () => {
  const path = useLocation().pathname
  const navigation = path !== '/restaurantes'

  return (
    <HeaderContainer>
      <div className="container">
        <Menu $visible={navigation}>
          <HomeLink to="/restaurantes">Restaurantes</HomeLink>
        </Menu>
        <HomeLink to="/restaurantes">
          <Logo src={logo} alt="EFOOD" />
        </HomeLink>
        <Cart $visible={navigation}>0 produto(s) no carrinho</Cart>
      </div>
    </HeaderContainer>
  )
}

export default Header
