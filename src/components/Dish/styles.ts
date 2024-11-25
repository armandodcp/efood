import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.coral};
  border: solid 8px ${cores.coral};
  color: ${cores.pessego};
  position: relative;

  @media (max-width: 640px) {
    margin-bottom: 32px;
  }
`

export const Image = styled.img`
  height: 167px;
  width: 100%;
  object-fit: cover;
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
  padding: 8px 0;
`

export const Description = styled.p`
  height: 98px;
  font-size: 14px;
  line-height: 22px;
  display: block;
  padding-bottom: 8px;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  max-width: 1024px;
  z-index: 1;
  background-color: ${cores.coral};
  color: ${cores.branca};
  position: relative;

  header {
    padding: 8px;
    position: absolute;
    top: 0;
    right: 0;

    img:hover {
      cursor: pointer;
    }

    @media (max-width: 640px) {
      padding: 4px;
      img {
        width: 80%;
      }
    }
  }

  @media (max-width: 1023px) {
    margin: 16px;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  padding: 32px;

  @media (max-width: 640px) {
    display: block;
    padding: 8px;
  }

  @media (min-width: 641px) and (max-width: 1023px) {
    padding: 16px;
  }
`

export const ImageModal = styled.img`
  height: 280px;
  width: 280px;
  object-fit: cover;

  @media (max-width: 640px) {
    width: 100%;
    padding-bottom: 8px;
  }
`

export const TextContent = styled.div`
  margin-left: 32px;
  font-size: 14px;
  line-height: 1.5;

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  div {
    margin-top: 24px;
    margin-bottom: 18px;
  }

  @media (max-width: 640px) {
    margin-left: 0;
  }
`
