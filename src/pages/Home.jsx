import { useState, useEffect, useMemo } from "react";
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
import ProductGridSkeleton from "../components/product/ProductGridSkeleton";
import SidebarSkeleton from "../components/product/SideBarSkeleton";

const Home = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const {
    items,
    itemsStatus,
    categoryStatus,
    error,
    categories,
    sortOption,
    searchTerm,
    selectedCategory,
  } = useSelector((state) => state.products);
  // console.log(filteredItems, status, categories);

  useEffect(() => {
    if (itemsStatus === "idle") {
      dispatch(fetchProducts());
    }
    if (categoryStatus === "idle") {
      dispatch(fetchCategories());
    }
  }, [dispatch, itemsStatus, categoryStatus]);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [location]);

  const finalProducts = useMemo(() => {
    let products = [...items];

    if (selectedCategory !== "all") {
      products = products.filter(
        (product) => product.category === selectedCategory,
      );
    }

    if (searchTerm.trim() !== "") {
      products = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    switch (sortOption) {
      case "priceLow":
        return products.sort((a, b) => a.price - b.price);

      case "priceHigh":
        return products.sort((a, b) => b.price - a.price);

      case "rating":
        return products.sort((a, b) => b.rating - a.rating);

      case "name":
        return products.sort((a, b) => a.title.localeCompare(b.title));

      default:
        return products;
    }
  }, [items, selectedCategory, sortOption, searchTerm]);

  if (itemsStatus === "loading" || categoryStatus === "loading") {
    return (
      <div className="flex gap-6 mx-2.5 min-h-[calc(100vh-5.5rem)]">
        <aside className="w-1/4 hidden md:block sticky top-22 self-start">
          <SidebarSkeleton />
        </aside>

        <div className="flex-1 mt-2.5">
          <ProductGridSkeleton />
        </div>
      </div>
    );
  }

  if (itemsStatus === "failed" || categoryStatus === "failed") {
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
      <div className="flex gap-6 mx-2.5 min-h-[calc(100vh-5.5rem)]">
        {/* <aside className="w-1/4 hidden md:block sticky top-22 self-start max-h-[calc(100vh-5rem)] overflow-auto"> */}
        <aside className="w-1/4 hidden md:block sticky top-22 self-start">
          <Sidebar categories={categories} />
        </aside>

        <div className="flex-1">
          <ProductGrid products={finalProducts} />
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
