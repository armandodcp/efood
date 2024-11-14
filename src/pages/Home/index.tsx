import RestaurantsList from '../../components/RestaurantsList'
import Restaurants from '../../models/Restaurants'
import sushi from '../../assets/images/restaurants/hioki/hioki.png'
import massa from '../../assets/images/restaurants/trattoria/trattoria.png'
import { Slogan } from '../../components/Header/styles'

const items: Restaurants[] = [
  {
    id: 1,
    image: sushi,
    infos: ['Destaque da semana', 'Japonesa'],
    title: 'Hioki Sushi',
    rating: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    page: '/hioki',
    link: 'Saiba mais'
  },
  {
    id: 2,
    image: massa,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    rating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    page: '/trattoria',
    link: 'Saiba mais'
  },
  {
    id: 3,
    image: massa,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    rating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    page: '/trattoria',
    link: 'Saiba mais'
  },
  {
    id: 4,
    image: massa,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    rating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    page: '/trattoria',
    link: 'Saiba mais'
  },
  {
    id: 5,
    image: massa,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    rating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    page: '/trattoria',
    link: 'Saiba mais'
  },
  {
    id: 6,
    image: massa,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    rating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    page: '/trattoria',
    link: 'Saiba mais'
  }
]

const Home = () => (
  <>
    <Slogan>
      Viva experiências gastronômicas
      <br />
      no conforto da sua casa
    </Slogan>
    <RestaurantsList restaurants={items} title="Restaurantes" />
  </>
)

export default Home
