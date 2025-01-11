import * as S from './styles'

type Props = {
  cooking: string
  title: string
  cover: string
}

const Banner = ({ cooking, title, cover }: Props) => (
  <S.Cover
    style={{
      backgroundImage: `url(${cover})`
    }}
  >
    <div className="container">
      <S.Cooking>{cooking}</S.Cooking>
      <S.Title>{title}</S.Title>
    </div>
  </S.Cover>
)

export default Banner
