import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  fetchProducts,
  fetchCategories,
} from "../features/products/productsSlice";
import ProductGrid from "../components/product/ProductGrid";
import Loader from "../components/ui/Loader";
import ErrorMessage from "../components/ui/ErrorMessage";
import Sidebar from "../components/product/SideBar";
import MobileCategoryDrawer from "../components/product/MobileDrawer";

const Home = () => {
  const location = useLocation();

  const dispatch = useDispatch();
  const { filteredItems, itemsStatus, categoryStatus, error, categories } =
    useSelector((state) => state.products);
  // console.log(filteredItems, status, categories);

  useEffect(() => {
    // if (status === "idle") {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
    // }
  }, [dispatch]);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  useEffect(() => {
    setIsDrawerOpen(false);
  }, [location]);

  if (itemsStatus === "loading" || categoryStatus === "loading") {
    return <Loader />;
  }

  if (itemsStatus === "failed" || itemsStatus === "failed") {
    return <ErrorMessage message={error} />;
  }

  return (
    <>
      <div className="flex justify-end items-center mb-3 mx-2.5 mt-2.5 md:hidden">
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="bg-[#1b8caf] text-white px-4 py-2 rounded-lg"
        >
          Filter
        </button>
      </div>
      <div className="flex gap-6 mx-2.5">
        <aside className="w-1/4 hidden md:block sticky top-22 self-start max-h-[calc(100vh-5rem)] overflow-auto">
          <Sidebar categories={categories} />
        </aside>

        <div className="flex-1">
          <ProductGrid products={filteredItems} />
        </div>
      </div>

      <MobileCategoryDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        categories={categories}
      />
    </>
  );
};

export default Home;
