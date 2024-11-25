import { useEffect, useState } from 'react'
import { Slogan } from '../../components/Header/styles'
import RestaurantsList from '../../components/RestaurantsList'

export interface Menu {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurants = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Menu[]
}

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurants[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  return (
    <>
      <Slogan>
        Viva experiências gastronômicas
        <br />
        no conforto da sua casa
      </Slogan>
      <RestaurantsList restaurants={restaurants} />
    </>
  )
}

export default Home
