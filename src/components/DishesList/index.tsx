import Dish from '../Dish'
import * as S from './styles'

type Props = {
  restaurant: number
  dishes: Menu[]
}

const DishesList = ({ restaurant, dishes }: Props) => (
  <div className="container">
    <S.List>
      {dishes.map((dish) => (
        <Dish
          restaurant={restaurant}
          key={dish.id}
          image={dish.foto}
          price={dish.preco}
          id={dish.id}
          title={dish.nome}
          description={dish.descricao}
          portion={dish.porcao}
          button="Mais detalhes"
        />
      ))}
    </S.List>
  </div>
)

export default DishesList
