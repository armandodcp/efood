import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/social-media/instagram.png'
import facebook from '../../assets/images/social-media/facebook.png'
import twitter from '../../assets/images/social-media/twitter.png'
import * as S from './styles'

const Footer = () => (
  <S.Container>
    <S.FooterSection>
      <S.Logo src={logo} alt="EFOOD" />
      <S.LinksContainer>
        <Link to="/">
          <S.Links src={instagram} alt="Instagram" />
        </Link>
        <Link to="/">
          <S.Links src={facebook} alt="Facebook" />
        </Link>
        <Link to="/">
          <S.Links src={twitter} alt="Twitter" />
        </Link>
      </S.LinksContainer>
      <S.Disclaimer>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade
        <br /> dos produtos é toda do estabelecimento contratado.
      </S.Disclaimer>
    </S.FooterSection>
  </S.Container>
)

export default Footer
