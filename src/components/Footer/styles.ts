import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 298px;
  background-color: ${colors.peach};
  font-size: 10px;

  @media (max-width: 640px) {
    height: 280px;
    padding: 0 16px;
  }
`

export const Logo = styled.img`
  width: 125px;
  margin-top: 40px;
  margin-bottom: 12px;
`

export const LinksContainer = styled.div`
  display: flex;
  margin-top: 16px;
  justify-content: center;
  gap: 8px;
`

export const Links = styled.img`
  width: 24px;
  height: auto;
  margin-top: 8px;
`

export const Disclaimer = styled.p`
  margin-top: 72px;
  height: auto;

  @media (max-width: 640px) {
    margin-top: 40px;
  }
`

export const FooterSection = styled.div`
  text-align: center;
`
