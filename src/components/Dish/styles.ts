import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.coral};
  border: solid 8px ${cores.coral};
  color: ${cores.pessego};
  position: relative;

  @media (max-width: 640px) {
    margin-bottom: 32px;
  }
`

export const Imagem = styled.img`
  width: 100%;
`

export const TituloContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  padding: 8px 0;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  padding-bottom: 8px;
`
