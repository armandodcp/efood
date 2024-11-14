import Restaurant from '../Restaurant'
import { List } from './styles'
import Restaurants from '../../models/Restaurants'

export type Props = {
  title: string
  restaurants: Restaurants[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <div className="container">
    <List>
      {restaurants.map((restaurant) => (
        <Restaurant
          key={restaurant.id}
          image={restaurant.image}
          infos={restaurant.infos}
          title={restaurant.title}
          rating={restaurant.rating}
          description={restaurant.description}
          page={restaurant.page}
          link={restaurant.link}
        />
      ))}
    </List>
  </div>
)

export default RestaurantsList
