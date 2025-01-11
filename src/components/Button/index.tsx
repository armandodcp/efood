import * as S from './styles'

export type Props = {
  type?: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: string
  size?: 'small' | 'big'
  disabled?: boolean
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  size,
  disabled
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <S.ButtonClick
        type={type}
        title={title}
        onClick={onClick}
        size={size}
        disabled={disabled}
      >
        {children}
      </S.ButtonClick>
    )
  }

  return (
    <S.ButtonLink to={to as string} title={title} size={size}>
      {children}
    </S.ButtonLink>
  )
}

export default Button
