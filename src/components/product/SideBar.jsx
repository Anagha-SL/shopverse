import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../features/products/productsSlice";
import SortBy from "./SortBy";

const Sidebar = ({ categories, onCategorySelect }) => {
  const dispatch = useDispatch();
  const { selectedCategory } = useSelector((state) => state.products);

  const handleSelect = (category) => {
    dispatch(setCategory(category));
    if (onCategorySelect) onCategorySelect();
  };

  return (
    <div className="bg-white rounded-xl shadow-sm flex flex-col max-h-[calc(100vh-5.5rem)]">
      <div className="p-3">
        <h2 className="text-lg font-semibold text-slate-800">
          Shop by Category
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto p-2.5 space-y-2">
        <div
          onClick={() => handleSelect("all")}
          className={`cursor-pointer px-3 py-2 rounded ${
            selectedCategory === "all"
              ? "bg-[#4aa8c4]/20 font-medium text-[#1b8caf]"
              : "text-slate-600 hover:bg-gray-100"
          }`}
        >
          All
        </div>

        {categories?.map((cat) => (
          <div
            key={cat.slug}
            onClick={() => handleSelect(cat.slug)}
            className={`cursor-pointer px-3 py-2 rounded capitalize ${
              selectedCategory === cat.slug
                ? "bg-[#4aa8c4]/20 font-medium text-[#1b8caf]"
                : "text-slate-600 hover:bg-gray-100"
            }`}
          >
            {cat.name}
          </div>
        ))}
      </div>

      <SortBy />
    </div>
  );
};

export default Sidebar;
