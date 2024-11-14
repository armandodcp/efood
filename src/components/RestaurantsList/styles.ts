import styled from 'styled-components'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  margin: 80px 0;

  @media (max-width: 640px) {
    display: block;
  }

  @media (min-width: 641px) and (max-width: 1023px) {
    column-gap: 20px;
  }
`

export const Titulo = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
