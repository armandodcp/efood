import { useState } from 'react'
import {
  Card,
  ContentContainer,
  Description,
  Image,
  ImageModal,
  Modal,
  ModalContent,
  TextContent,
  Title,
  TitleContainer
} from './styles'
import { Menu } from '../../pages/Home'
import Button from '../Button'
import close from '../../assets/images/others/close.png'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

type Props = {
  restaurant: number
  image: string
  price: number
  id: number
  title: string
  description: string
  portion: string
  button: string
}

interface ModalState extends Menu {
  isVisible: boolean
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const Dish = ({
  restaurant,
  image,
  price,
  id,
  title,
  description,
  portion,
  button
}: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 172) {
      return description.slice(0, 168) + ' ...'
    }
    return description
  }

  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    foto: '',
    preco: 0,
    id: 0,
    nome: '',
    descricao: '',
    porcao: ''
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      foto: '',
      preco: 0,
      id: 0,
      nome: '',
      descricao: '',
      porcao: ''
    })
  }

  const dispatch = useDispatch()

  const addToCart = () => {
    const dish: Menu = {
      foto: image,
      preco: price,
      id: id,
      nome: title,
      descricao: description,
      porcao: portion
    }

    dispatch(add({ restaurant, dish }))
    closeModal()
    dispatch(open())
  }

  return (
    <>
      <Card>
        <Image src={image} alt={title} />
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
        <Description>{getDescription(description)}</Description>
        <Button
          type="button"
          title="Clique aqui para mais detalhes"
          onClick={() => {
            setModal({
              isVisible: true,
              foto: image,
              preco: price,
              id: id,
              nome: title,
              descricao: description,
              porcao: portion
            })
          }}
        >
          {button}
        </Button>
      </Card>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <header>
            <img
              src={close}
              title="Fechar"
              onClick={() => {
                closeModal()
              }}
            />
          </header>
          <ContentContainer>
            <ImageModal src={image} alt={title} />
            <TextContent>
              <h3>{title}</h3>
              <p>{description}</p>
              <div>{portion}</div>
              <Button
                type="button"
                title="Adicionar ao carrinho"
                size="small"
                onClick={addToCart}
              >
                {`Adicionar ao carrinho - ${formatPrice(price)}`}
              </Button>
            </TextContent>
          </ContentContainer>
        </ModalContent>
        <div
          onClick={() => {
            closeModal()
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}

export default Dish
