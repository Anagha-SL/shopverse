import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";
import cartReducer from "../features/cart/cartSlice";

const store = configureStore({
  reducer: { products: productsReducer, cart: cartReducer },
});

let currentCart;
store.subscribe(() => {
  const previousCart = currentCart;
  currentCart = store.getState().cart.items;

  if (previousCart !== currentCart) {
    localStorage.setItem("cart", JSON.stringify(currentCart));
  }
});

export default store;
