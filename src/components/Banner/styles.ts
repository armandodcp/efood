import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-size: 100% 320%;
  background-position: center center;
  background-repeat: no-repeat;
  font-weight: bold;
  position: absolute;
  top: 185px;
  margin-bottom: 56px;

  .container {
    position: relative;
    padding-top: 215px;
    display: flex
    justify-content: space-between;
    align-items: flex-end;
  }

  @media (max-width: 768px) {
    background-size: 100% 120%;
  }
`

export const Comida = styled.h2`
  position: absolute;
  top: 25px;
  font-size: 32px;
  font-weight: 100;
  color: ${cores.branca};
`

export const Titulo = styled.h2`
  font-size: 32px;
  color: ${cores.branca};
`