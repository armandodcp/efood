import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'
import { Props } from '.'

export const ButtonLink = styled(Link)<Props>`
  background-color: ${cores.coral};
  color: ${cores.pessego};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  display: inline-block;
  margin: ${(props) => (props.size === 'big' ? '8px' : '0')};
  text-decoration: none;
`

export const ButtonClick = styled(ButtonLink)`
  background-color: ${cores.pessego};
  color: ${cores.coral};
  width: 100%;
  text-align: center;
`
