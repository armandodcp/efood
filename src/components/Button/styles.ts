import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'
import { Props } from '.'

export const ButtonLink = styled(Link)<Props>`
  background-color: ${colors.coral};
  color: ${colors.peach};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  display: inline-block;
  margin: ${(props) => (props.size === 'big' ? '8px' : '0')};
  text-decoration: none;
`

export const ButtonClick = styled.button<Props>`
  background-color: ${colors.peach};
  color: ${colors.coral};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  width: ${(props) => (props.size === 'small' ? 'auto' : '100%')};
  margin: ${(props) => (props.size === 'big' ? '8px' : '0')};
  text-align: center;
  border: none;
  cursor: pointer;
`
