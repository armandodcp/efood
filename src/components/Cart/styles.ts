import styled from 'styled-components'
import { colors } from '../../styles'
import trash from '../../assets/images/others/trash.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.black};
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
  background-color: ${colors.coral};
  z-index: 1;
  padding: 32px 8px 32px 8px;
  max-width: 360px;
  width: 100%;
  overflow: auto;

  p {
    color: ${colors.peach};
  }
`

export const Prices = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.peach};
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
  background-color: ${colors.peach};
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
    color: ${colors.coral};
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

    &:hover {
      cursor: pointer;
    }
  }
`

export const FormDelivery = styled.div`
  color: ${colors.peach};
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 24px;

  h3 {
    font-size: 16px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    font-weight: normal;
    margin: 16px 0 24px 0;
  }

  label {
    display: block;
    font-size: 14px;
    margin: 8px 0;
  }

  input {
    background-color: ${colors.peach};
    font-weight: bold;
    width: 100%;
    height: 32px;
    border: none;
    padding: 8px;

    &.error {
      border: 2px solid red;
    }
  }

  .input-card {
    min-width: 228px;
  }
`

export const InputGroup = styled.div`
  label {
    display: block;
  }
`

export const Row = styled.div`
  display: flex;
  column-gap: 34px;
  align-items: flex-end;
`

export const ButtonGroup = styled.div`
  margin: 8px 0;
`
