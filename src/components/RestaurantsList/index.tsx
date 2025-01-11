import Restaurant from '../Restaurant'
import * as S from './styles'

export type Props = {
  restaurants: Restaurants[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <div className="container">
    <S.List>
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
    </S.List>
  </div>
)

export default RestaurantsList
