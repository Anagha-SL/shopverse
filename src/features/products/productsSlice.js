import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProductsAPI, fetchCategoriesAPI } from "./productsAPI";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetchProductsAPI();
    return response.data.products;
  },
);

export const fetchCategories = createAsyncThunk(
  "products/fetchCategories",
  async () => {
    const response = await fetchCategoriesAPI();
    return response.data;
  },
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    filteredItems: [],
    categories: [],
    selectedCategory: "all",
    itemsStatus: "idle",
    categoryStatus: "idle",
    error: null,
  },
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;

      if (action.payload === "all") {
        state.filteredItems = state.items;
      } else {
        state.filteredItems = state.items.filter(
          (item) => item.category === action.payload,
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.itemsStatus = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.itemsStatus = "succeeded";
        state.items = action.payload;
        state.filteredItems = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.itemsStatus = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchCategories.pending, (state) => {
        state.categoryStatus = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categoryStatus = "fulfilled";
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.categoryStatus = "failed";
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
export const { setCategory } = productsSlice.actions;
