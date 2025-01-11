import styled from 'styled-components'
import { colors } from '../../styles'

type Props = {
  $cooking?: boolean
}

export const TagContainer = styled.div<Props>`
  background-color: ${colors.coral};
  color: ${colors.peach};
  font-size: 12px;
  font-weight: bold;
  padding: 6px 4px;
  display: inline-block;
  ${(props) =>
    props.$cooking === true
      ? 'text-transform: capitalize'
      : 'text-transform: none'};
`
