import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Cart from "../pages/Cart.jsx";
import ProductDetails from "../pages/ProductDetails.jsx";
import PageNotFound from "../pages/PageNotFound.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="cart" element={<Cart />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
