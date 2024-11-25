import { ButtonClick, ButtonLink } from './styles'

export type Props = {
  type?: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
  size?: 'small' | 'big'
}

const Button = ({ type, title, to, onClick, children, size }: Props) => {
  if (type === 'button') {
    return (
      <ButtonClick type="button" title={title} onClick={onClick} size={size}>
        {children}
      </ButtonClick>
    )
  }

  return (
    <ButtonLink to={to as string} title={title} size={size}>
      {children}
    </ButtonLink>
  )
}

export default Button
