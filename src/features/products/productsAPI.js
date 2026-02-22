import api from "../../services/api";

export const fetchProductsAPI = () => api.get("/products?limit=0");

export const fetchProductByIdAPI = (id) => api.get(`/products/${id}`);

export const fetchCategoriesAPI = () => api.get("/products/categories");
