import { TagContainer } from './styles'

export type Props = {
  $cooking?: boolean
  children: string
}

const Tag = ({ $cooking, children }: Props) => (
  <TagContainer $cooking={$cooking}>{children}</TagContainer>
)

export default Tag
