import React from 'react'
import { Comida, Imagem, Titulo } from './styles'

type Props = {
  cooking: string
  name: string
  cover: string
}

const Banner = ({ cooking, name, cover }: Props) => {
  const [imageCover, setImage] = React.useState<string | null>(null)

  React.useEffect(() => {
    import(`../../assets/images/restaurants/${cover}/banner/${cover}.png`)
      .then((imageModule) => {
        setImage(imageModule.default)
      })
      .catch((error) => {
        console.error('Erro ao carregar a imagem:', error)
        setImage(null)
      })
  }, [cover])

  return (
    <Imagem
      style={{
        backgroundImage: `url(${imageCover})`
      }}
    >
      <div className="container">
        <Comida>{cooking}</Comida>
        <Titulo>{name}</Titulo>
      </div>
    </Imagem>
  )
}
export default Banner
