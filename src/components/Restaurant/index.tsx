import Tag from '../Tag'
import Button from '../Button'
import star from '../../assets/images/others/star.png'
import * as S from './styles'

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
    <S.Card>
      <S.Image src={image} alt={title} />
      <S.Information>
        {featured && <Tag>Destaque da semana</Tag>}
        <Tag $cooking={true}>{infos}</Tag>
      </S.Information>
      <S.DescriptionContainer>
        <S.TitleContainer>
          <S.Title>{title}</S.Title>
          <S.ReviewContainer>
            <S.Review>{rating}</S.Review>
            <S.Star src={star} alt="Estrelas" />
          </S.ReviewContainer>
        </S.TitleContainer>
        <S.Description>{getDescription(description)}</S.Description>
        <Button
          size="big"
          type="link"
          to={`/restaurantes/${pathRestaurant}`}
          title="Clique aqui para mais detalhes do restaurante"
        >
          Saiba mais
        </Button>
      </S.DescriptionContainer>
    </S.Card>
  )
}

export default Restaurant
