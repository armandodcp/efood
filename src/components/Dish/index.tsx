import Button from '../Button'
import { Card, Descricao, Imagem, Titulo, TituloContainer } from './styles'

type Props = {
  image: string
  title: string
  description: string
  button: string
}

const Dish = ({ image, title, description, button }: Props) => (
  <Card>
    <Imagem src={image} alt={title} />
    <TituloContainer>
      <Titulo>{title}</Titulo>
    </TituloContainer>
    <Descricao>{description}</Descricao>
    <Button type="button" title="Clique aqui para adicionar ao carrinho">
      {button}
    </Button>
  </Card>
)

export default Dish
