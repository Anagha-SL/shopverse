import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  setSearchTerm,
  setCategory,
} from "../../features/products/productsSlice";
import { useLocation, useNavigate } from "react-router-dom";

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const searchTerm = useSelector((state) => state.products.searchTerm);

  const [localSearch, setLocalSearch] = useState(searchTerm);

  // Debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      //   if (localSearch.trim() !== "" && localSearch !== searchTerm) {
      dispatch(setSearchTerm(localSearch));
      //   }
    }, 400);
    return () => clearTimeout(timer);
  }, [localSearch, dispatch]);

  return (
    <div className="relative w-full max-w-md">
      {/* Search Icon */}
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        🔍︎
      </span>
      <input
        type="text"
        placeholder="Search products..."
        value={localSearch}
        onChange={(e) => setLocalSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && localSearch.trim() !== "") {
            dispatch(setCategory("all"));
            // dispatch(setSearchTerm(localSearch));
            if (location.pathname !== "/") {
              navigate("/");
            }
          }
        }}
        className="w-full pl-10 pr-10 py-2.5 rounded-full 
                   bg-white border border-gray-200
                   focus:outline-none 
                   focus:border-[#458395]
                   transition-all duration-200
                   shadow-sm"
      />
      {localSearch && (
        <button
          onClick={() => setLocalSearch("")}
          className="absolute right-4 top-1/2 -translate-y-1/2 
                     text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default Search;
