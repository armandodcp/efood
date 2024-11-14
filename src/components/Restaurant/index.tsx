import Tag from '../Tag'
import {
  Avaliacao,
  AvaliacaoContainer,
  Card,
  Descricao,
  DescriptionContainer,
  Estrela,
  Imagem,
  Infos,
  Titulo,
  TituloContainer
} from './styles'
import estrela from '../../assets/images/others/estrela.png'
import Button from '../Button'

type Props = {
  image: string
  infos: string[]
  title: string
  rating: string
  description: string
  page: string
  link: string
}

const Restaurant = ({
  image,
  infos,
  title,
  rating,
  description,
  page,
  link
}: Props) => (
  <Card>
    <Imagem src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <DescriptionContainer>
      <TituloContainer>
        <Titulo>{title}</Titulo>
        <AvaliacaoContainer>
          <Avaliacao>{rating}</Avaliacao>
          <Estrela src={estrela} alt="Estrelas" />
        </AvaliacaoContainer>
      </TituloContainer>
      <Descricao>{description}</Descricao>
      <Button
        size="big"
        type="link"
        to={page}
        title="Clique aqui para mais detalhes do restaurante"
      >
        {link}
      </Button>
    </DescriptionContainer>
  </Card>
)

export default Restaurant
