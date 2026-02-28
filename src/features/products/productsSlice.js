import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchProductsAPI,
  fetchCategoriesAPI,
  fetchProductByIdAPI,
} from "./productsAPI";

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

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id) => {
    const response = await fetchProductByIdAPI(id);
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
    selectedProduct: null,
    itemsStatus: "idle",
    categoryStatus: "idle",
    productStatus: "idle",
    error: null,
    sortOption: "default",
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
    setSortOption: (state, action) => {
      state.sortOption = action.payload;
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
      })
      .addCase(fetchProductById.pending, (state) => {
        state.productStatus = "loading";
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.productStatus = "succeeded";
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.productStatus = "failed";
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
export const { setCategory, setSortOption } = productsSlice.actions;
