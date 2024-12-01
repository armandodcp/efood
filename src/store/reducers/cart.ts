import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Menu } from '../../pages/Home'

type CartState = {
  items: Menu[]
  restaurant: number | null
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  restaurant: null,
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<{ restaurant: number; dish: Menu }>) => {
      const { restaurant, dish } = action.payload

      const dishCart = state.items.find((item) => item.id === dish.id)

      if (dishCart) {
        alert('O produto já foi adicionado ao carrinho')
      } else if (state.restaurant !== null && state.restaurant !== restaurant) {
        alert('Você só pode adicionar produtos de um restaurante por vez')
      } else {
        state.items.push(dish)
        state.restaurant = restaurant
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)

      if (state.items.length === 0) {
        state.restaurant = null
      }
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, remove, open, close } = cartSlice.actions
export default cartSlice.reducer
