import * as S from './styles'

export type Props = {
  $cooking?: boolean
  children: string
}

const Tag = ({ $cooking, children }: Props) => (
  <S.TagContainer $cooking={$cooking}>{children}</S.TagContainer>
)

export default Tag
