import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  fetchCategories,
} from "../features/products/productsSlice";
import ProductGrid from "../components/product/ProductGrid";
import Loader from "../components/ui/Loader";
import ErrorMessage from "../components/ui/ErrorMessage";
import Sidebar from "../components/product/SideBar";

const Home = () => {
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

  if (itemsStatus === "loading" || categoryStatus === "loading") {
    return <Loader />;
  }

  if (itemsStatus === "failed" || itemsStatus === "failed") {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="flex gap-6">
      {/* Sidebar - Hidden on Mobile */}
      <aside className="w-1/4 hidden md:block sticky top-22 self-start max-h-[calc(100vh-5rem)] overflow-auto">
        <Sidebar categories={categories} />
      </aside>

      {/* Products */}
      <div className="flex-1">
        <ProductGrid products={filteredItems} />
      </div>
    </div>
  );
};

export default Home;
