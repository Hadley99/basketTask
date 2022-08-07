import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./redux/features/productsSlice";
import cartReducer from "./redux/features/cartSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});
