import {
  Review,
  ReviewContainer,
  Card,
  Description,
  DescriptionContainer,
  Star,
  Image,
  Information,
  Title,
  TitleContainer
} from './styles'
import Tag from '../Tag'
import Button from '../Button'
import star from '../../assets/images/others/star.png'

type Props = {
  image: string
  featured: boolean
  infos: string
  title: string
  rating: number
  description: string
}

const Restaurant = ({
  image,
  featured,
  infos,
  title,
  rating,
  description
}: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 233) {
      return description.slice(0, 229) + ' ...'
    }
    return description
  }

  const pathRestaurant = title
    .replace(/\s+/g, '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

  return (
    <Card>
      <Image src={image} alt={title} />
      <Information>
        {featured && <Tag>Destaque da semana</Tag>}
        <Tag $cooking={true}>{infos}</Tag>
      </Information>
      <DescriptionContainer>
        <TitleContainer>
          <Title>{title}</Title>
          <ReviewContainer>
            <Review>{rating}</Review>
            <Star src={star} alt="Estrelas" />
          </ReviewContainer>
        </TitleContainer>
        <Description>{getDescription(description)}</Description>
        <Button
          size="big"
          type="link"
          to={`/restaurantes/${pathRestaurant}`}
          title="Clique aqui para mais detalhes do restaurante"
        >
          Saiba mais
        </Button>
      </DescriptionContainer>
    </Card>
  )
}

export default Restaurant
