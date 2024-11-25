import { List } from './styles'
import { Menu } from '../../pages/Home'
import Dish from '../Dish'

type Props = {
  dishes: Menu[]
}

const DishesList = ({ dishes }: Props) => (
  <div className="container">
    <List>
      {dishes.map((dish) => (
        <Dish
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
