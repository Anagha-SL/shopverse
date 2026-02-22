import { createSlice } from "@reduxjs/toolkit";
import { calculateTotals } from "./cartUtils";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.items.find((item) => item.id === product.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }

      const totals = calculateTotals(state.items);
      state.totalQuantity = totals.totalQuantity;
      state.totalPrice = totals.totalPrice;
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      const totals = calculateTotals(state.items);
      state.totalQuantity = totals.totalQuantity;
      state.totalPrice = totals.totalPrice;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
