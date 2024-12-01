import styled from 'styled-components'
import { cores } from '../../styles'
import trash from '../../assets/images/others/trash.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${cores.preta};
  opacity: 0.8;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.coral};
  z-index: 1;
  padding: 32px 8px 32px 8px;
  max-width: 360px;
  width: 100%;
  overflow: auto;
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${cores.pessego};
  margin-top: 40px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;

  span {
    display: block;
    font-size: 12px;
  }

  .empty-cart {
    margin-left: 32px;
  }
`

export const CartItem = styled.li`
  background-color: ${cores.pessego};
  display: flex;
  padding: 8px 0 12px 8px;
  position: relative;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    color: ${cores.coral};
    font-weight: bold;
    font-size: 18px;
  }

  span {
    display: block;
    font-size: 14px;
    padding-top: 16px;
  }

  button {
    background-image: url(${trash});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`
