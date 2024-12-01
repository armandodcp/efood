import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import DishesList from '../../components/DishesList'
import {
  useGetRestaurantsQuery,
  useGetRestaurantQuery
} from '../../services/api'

const Restaurant = () => {
  const { data: restaurants } = useGetRestaurantsQuery()
  const { pathRestaurant } = useParams<{ pathRestaurant: string }>()

  const urlAddress = restaurants?.find(
    (result) =>
      result.titulo
        .replace(/\s+/g, '')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') === pathRestaurant
  )

  const restaurantAddress = urlAddress?.id?.toString() || ''

  const { data: restaurant } = useGetRestaurantQuery(restaurantAddress, {
    skip: !urlAddress
  })

  if (!restaurant) {
    return (
      <div className="container">
        <br />
        <h4>Carregando...</h4>
        <br />
      </div>
    )
  }

  return (
    <>
      <Banner
        cooking={restaurant.tipo}
        title={restaurant.titulo}
        cover={restaurant.capa}
      />
      <DishesList restaurant={restaurant.id} dishes={restaurant.cardapio} />
    </>
  )
}

export default Restaurant
