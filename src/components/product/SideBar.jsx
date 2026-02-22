import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../features/products/productsSlice";

const Sidebar = ({ categories, onCategorySelect }) => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state) => state.products.selectedCategory,
  );

  const handleSelect = (category) => {
    dispatch(setCategory(category));
    if (onCategorySelect) {
      onCategorySelect();
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm my-2.5">
      <h2 className="font-semibold text-slate-800 mb-4">Shop by Category</h2>

      <ul className="space-y-2">
        <li
          onClick={() => handleSelect("all")}
          className={`cursor-pointer px-3 py-2 rounded-lg transition ${
            selectedCategory === "all"
              ? "bg-[#4aa8c4]/20 font-medium text-[#1b8caf]"
              : "text-slate-600 hover:bg-gray-100"
          }`}
        >
          All
        </li>

        {categories?.map((cat) => (
          <li
            key={cat.slug}
            onClick={() => handleSelect(cat.slug)}
            className={`cursor-pointer px-3 py-2 rounded-lg capitalize transition ${
              selectedCategory === cat.slug
                ? "bg-[#4aa8c4]/20 font-medium text-[#1b8caf]"
                : "text-slate-600 hover:bg-gray-100"
            }`}
          >
            {cat.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
