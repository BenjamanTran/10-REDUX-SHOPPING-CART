import { createSlice } from "@reduxjs/toolkit";

const cartSlide = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload
      const existItem = state.items.find((item) => item.id === newItem.id)
      state.changed = true
      state.totalQuantity++
      if (!existItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title
        })
      } else {
        existItem.quantity++
        existItem.totalPrice = existItem.totalPrice + existItem.price
      }
    },
    removeFromCart(state, action) {
      const idRemove = action.payload
      const existItem = state.items.find(item => item.id === idRemove)
      state.totalQuantity--
      state.changed = true
      if (existItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== idRemove)
      } else {
        existItem.quantity--
        existItem.totalPrice = existItem.totalPrice - existItem.price
      }
    },
    replaceCart(state, action) {
      state.items = action.payload.items
      state.totalQuantity = action.payload.totalQuantity
    }
  }
})


export const cartActions = cartSlide.actions
export default cartSlide
