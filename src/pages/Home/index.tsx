import { Slogan } from '../../components/Header/styles'
import RestaurantsList from '../../components/RestaurantsList'
import { useGetRestaurantsQuery } from '../../services/api'

export interface Menu {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurants = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Menu[]
}

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (restaurants) {
    return (
      <>
        <Slogan>
          Viva experiências gastronômicas
          <br />
          no conforto da sua casa
        </Slogan>
        <RestaurantsList restaurants={restaurants} />
      </>
    )
  }
  return (
    <div className="container">
      <br />
      <h4>Carregando...</h4>
      <br />
    </div>
  )
}

export default Home
