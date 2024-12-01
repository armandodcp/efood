import { List } from './styles'
import { Menu } from '../../pages/Home'
import Dish from '../Dish'

type Props = {
  restaurant: number
  dishes: Menu[]
}

const DishesList = ({ restaurant, dishes }: Props) => (
  <div className="container">
    <List>
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
    </List>
  </div>
)

export default DishesList
