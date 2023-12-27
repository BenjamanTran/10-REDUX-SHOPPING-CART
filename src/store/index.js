import { configureStore } from "@reduxjs/toolkit";
import cartSlide from "./cart-slide";

import uiSlide from "./ui-slice";

const store = configureStore({
  reducer: { ui: uiSlide.reducer, cart: cartSlide.reducer }
})

export default store
