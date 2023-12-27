import { createSlice } from "@reduxjs/toolkit";

const uiSlide = createSlice({
  name: 'ui',
  initialState: { cartIsVisiable: false, notification: null },
  reducers: {
    toggle(state) {
      state.cartIsVisiable = !state.cartIsVisiable
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message
      }
    }
  }
})

export const uiActions = uiSlide.actions
export default uiSlide

