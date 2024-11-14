import Banner from '../../components/Banner'
import DishsList from '../../components/DishsList'
import Dishs from '../../models/Dishs'
import pizza from '../../assets/images/restaurants/trattoria/dishs/pizza.png'
import guioza from '../../assets/images/restaurants/hioki/dishs/guioza.png'
import missoshiru from '../../assets/images/restaurants/hioki/dishs/missoshiru.png'
import salada from '../../assets/images/restaurants/hioki/dishs/salada.png'
import salmao from '../../assets/images/restaurants/hioki/dishs/salmao.png'
import sashimi from '../../assets/images/restaurants/hioki/dishs/sashimi.png'
import temaki from '../../assets/images/restaurants/hioki/dishs/temaki.png'
import { useParams } from 'react-router-dom'

const restaurantMenu: {
  [restaurant: string]: {
    cooking: string
    name: string
    cover: string
    dishes: Dishs[]
  }
} = {
  hioki: {
    cooking: 'Japonesa',
    name: 'Hioki Sushi',
    cover: 'hioki',
    dishes: [
      {
        id: 1,
        image: sashimi,
        title: 'Sashimi',
        description:
          'Finas tiras de peixe cru Nas opções branco, salmão e atum. Os alimentos são sempre frescos e adquiridos dos melhores fornecedores do mercado!',
        button: 'Adicionar ao carrinho'
      },
      {
        id: 2,
        image: temaki,
        title: 'Temaki',
        description:
          'Cone de algas recheado, com opção de sabores que não levam arroz, mas que trazem grandes quantidades de pepino e de peixe cru ou grelhado!',
        button: 'Adicionar ao carrinho'
      },
      {
        id: 3,
        image: missoshiru,
        title: 'Missoshiru',
        description:
          'Sopa que leva pasta de soja, caldo de peixe e tofu, recomendada para o controle dos níveis de colesterol, sendo rica em cálcio e menos calorias!',
        button: 'Adicionar ao carrinho'
      },
      {
        id: 4,
        image: guioza,
        title: 'Guioza',
        description:
          'Algumas versões mais leves e saudáveis de guioza, cozidas, grelhadas e feitas no vapor, com massa fininha podendo ter recheio de carne ou de legumes!',
        button: 'Adicionar ao carrinho'
      },
      {
        id: 5,
        image: salada,
        title: 'Salada com batata palha',
        description:
          'Salada bem variada para os dias mais quentes, uma opção diferente, preparada com escarola, tomates, pepino, batata palha e molho especial do chef!',
        button: 'Adicionar ao carrinho'
      },
      {
        id: 6,
        image: salmao,
        title: 'Salmão no papelote',
        description:
          'Nossa receita de salmão assado no forno com um pouco de azeite, outros temperos e uma variedade de legumes, embrulhado em um papelote. Delicioso!',
        button: 'Adicionar ao carrinho'
      }
    ]
  },
  trattoria: {
    cooking: 'Italiana',
    name: 'La Dolce Vita Trattoria',
    cover: 'trattoria',
    dishes: [
      {
        id: 1,
        image: pizza,
        title: 'Pizza Marguerita',
        description:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        button: 'Adicionar ao carrinho'
      },
      {
        id: 2,
        image: pizza,
        title: 'Pizza Marguerita',
        description:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        button: 'Adicionar ao carrinho'
      },
      {
        id: 3,
        image: pizza,
        title: 'Pizza Marguerita',
        description:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        button: 'Adicionar ao carrinho'
      },
      {
        id: 4,
        image: pizza,
        title: 'Pizza Marguerita',
        description:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        button: 'Adicionar ao carrinho'
      },
      {
        id: 5,
        image: pizza,
        title: 'Pizza Marguerita',
        description:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        button: 'Adicionar ao carrinho'
      },
      {
        id: 6,
        image: pizza,
        title: 'Pizza Marguerita',
        description:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        button: 'Adicionar ao carrinho'
      }
    ]
  }
}

const Restaurants = () => {
  const { restaurantName } = useParams<{ restaurantName: string }>()
  const options = restaurantMenu[restaurantName ?? '']
  const { cooking, name, cover, dishes } = options

  return (
    <>
      <Banner cooking={cooking} name={name} cover={cover} />
      <DishsList dishs={dishes} title="Pratos" />
    </>
  )
}

export default Restaurants
