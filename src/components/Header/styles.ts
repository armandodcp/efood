import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'
import fundo from '../../assets/images/others/background.png'

type Props = {
  $visible: boolean
}

export const HeaderContainer = styled.header`
  padding-top: 40px;
  height: 384px;
  background-image: url(${fundo});

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 640px) {
    height: 300px;
  }
`

export const HomeLink = styled(Link)`
  font-size: 16px;
  color: ${cores.coral};
  font-weight: bold;
  text-decoration: none;
`

export const Logo = styled.img`
  width: 125px;
  text-align: center;
`

export const Menu = styled.div<Props>`
  font-size: 16px;
  color: ${cores.coral};
  font-weight: bold;
  flex: 1;
  text-align: left;
  visibility: ${(props) => (props.$visible ? 'visible' : 'hidden')};
`

export const Cart = styled.div<Props>`
  font-size: 16px;
  color: ${cores.coral};
  font-weight: bold;
  flex: 1;
  text-align: right;
  visibility: ${(props) => (props.$visible ? 'visible' : 'hidden')};

  &:hover {
    cursor: pointer;
  }
`

export const Slogan = styled.h1`
  color: ${cores.coral};
  font-size: 36px;
  text-align: center;
  margin-top: -116px;

  @media (max-width: 640px) {
    font-size: 22px;
    padding: 0 16px;
  }
`
