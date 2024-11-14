import Dish from '../Dish'
import { List } from './styles'
import Dishs from '../../models/Dishs'

export type Props = {
  title: string
  dishs: Dishs[]
}

const DishsList = ({ dishs }: Props) => (
  <div className="container">
    <List>
      {dishs.map((dish) => (
        <Dish
          key={dish.id}
          image={dish.image}
          title={dish.title}
          description={dish.description}
          button={dish.button}
        />
      ))}
    </List>
  </div>
)

export default DishsList
