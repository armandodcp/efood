import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }

  @media (max-width: 640px) {
    margin-bottom: 32px;
  }
`

export const Imagem = styled.img`
  width: 100%;
  display: block;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
`

export const DescriptionContainer = styled.div`
  border: solid 1px ${cores.coral};
  border-width: 0 1px 1px 1px;
`

export const TituloContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 8px;
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  padding: 8px;
`

export const AvaliacaoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
`

export const Avaliacao = styled.span`
  font-weight: bold;
  font-size: 18px;
  color: ${cores.coral};
  margin-right: 8px;
`

export const Estrela = styled.img`
  width: 16px;
  height: 16px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  padding: 8px;
  padding-top: 0;
`
