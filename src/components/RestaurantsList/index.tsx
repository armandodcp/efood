import { List } from './styles'
import { Restaurants } from '../../pages/Home'
import Restaurant from '../Restaurant'

export type Props = {
  restaurants: Restaurants[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <div className="container">
    <List>
      {restaurants.map((restaurant) => (
        <Restaurant
          key={restaurant.id}
          image={restaurant.capa}
          featured={restaurant.destacado}
          infos={restaurant.tipo}
          title={restaurant.titulo}
          rating={restaurant.avaliacao}
          description={restaurant.descricao}
        />
      ))}
    </List>
  </div>
)

export default RestaurantsList
