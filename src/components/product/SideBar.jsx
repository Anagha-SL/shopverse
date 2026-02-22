import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../features/products/productsSlice";

const Sidebar = ({ categories }) => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state) => state.products.selectedCategory,
  );

  const handleSelect = (category) => {
    dispatch(setCategory(category));
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm my-2.5">
      <h2 className="font-semibold text-slate-800 mb-4">Shop by Category</h2>

      <ul className="space-y-2">
        <li
          onClick={() => handleSelect("all")}
          className={`cursor-pointer px-3 py-2 rounded-lg transition ${
            selectedCategory === "all"
              ? "bg-teal-100 text-teal-600 font-medium"
              : "text-slate-600 hover:bg-gray-100"
          }`}
        >
          All
        </li>

        {/* Dynamic Categories */}
        {categories?.map((cat) => (
          <li
            key={cat.slug}
            onClick={() => handleSelect(cat.slug)}
            className={`cursor-pointer px-3 py-2 rounded-lg capitalize transition ${
              selectedCategory === cat.slug
                ? "bg-teal-100 text-teal-600 font-medium"
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
