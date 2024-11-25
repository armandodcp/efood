import styled from 'styled-components'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;
  margin: 136px 0;

  @media (max-width: 640px) {
    display: block;
    margin-top: 176px;
  }

  @media (min-width: 641px) and (max-width: 1023px) {
    grid-template-columns: 1fr 1fr;
  }
`
