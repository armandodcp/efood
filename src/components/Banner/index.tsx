import { Cooking, Cover, Title } from './styles'

type Props = {
  cooking: string
  title: string
  cover: string
}

const Banner = ({ cooking, title, cover }: Props) => (
  <Cover
    style={{
      backgroundImage: `url(${cover})`
    }}
  >
    <div className="container">
      <Cooking>{cooking}</Cooking>
      <Title>{title}</Title>
    </div>
  </Cover>
)

export default Banner
