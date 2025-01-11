import { useGetRestaurantsQuery } from '../../services/api'
import RestaurantsList from '../../components/RestaurantsList'
import * as S from '../../components/Header/styles'

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (restaurants) {
    return (
      <>
        <S.Slogan>
          Viva experiências gastronômicas
          <br />
          no conforto da sua casa
        </S.Slogan>
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
