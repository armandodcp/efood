import { Link } from 'react-router-dom'
import {
  Container,
  FooterSection,
  Info,
  Links,
  LinksContainer,
  Logo
} from './styles'
import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/social-media/instagram.png'
import facebook from '../../assets/images/social-media/facebook.png'
import twitter from '../../assets/images/social-media/twitter.png'

const Footer = () => (
  <Container>
    <FooterSection>
      <Logo src={logo} alt="EFOOD" />
      <LinksContainer>
        <Link to="/">
          <Links src={instagram} alt="Instagram" />
        </Link>
        <Link to="/">
          <Links src={facebook} alt="Facebook" />
        </Link>
        <Link to="/">
          <Links src={twitter} alt="Twitter" />
        </Link>
      </LinksContainer>
      <Info>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade
        <br /> dos produtos é toda do estabelecimento contratado.
      </Info>
    </FooterSection>
  </Container>
)

export default Footer
