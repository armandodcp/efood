import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Restaurants } from '../Home'
import Banner from '../../components/Banner'
import DishesList from '../../components/DishesList'

const Restaurant = () => {
  const { endereco } = useParams<{ endereco: string }>()
  const [restaurant, setRestaurant] = useState<Restaurants | null>(null)

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data: Restaurants[]) => {
        const findRestaurant = data.find(
          (result) =>
            result.titulo
              .replace(/\s+/g, '')
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '') === endereco
        )
        setRestaurant(findRestaurant || null) // Define o restaurante ou null
      })
  }, [endereco])

  if (!restaurant) {
    return (
      <>
        <div className="container">
          <br />
          <h4>Carregando . . .</h4>
          <br />
        </div>
      </>
    )
  }

  return (
    <>
      <Banner
        cooking={restaurant.tipo}
        title={restaurant.titulo}
        cover={restaurant.capa}
      />
      <DishesList dishes={restaurant.cardapio} />
    </>
  )
}

export default Restaurant
