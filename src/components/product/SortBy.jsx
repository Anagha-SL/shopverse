import { useDispatch, useSelector } from "react-redux";
import { setSortOption } from "../../features/products/productsSlice";

const SortBy = () => {
  const dispatch = useDispatch();
  const sortOption = useSelector((state) => state.products.sortOption);

  return (
    <div className="border-t border-slate-200 p-5">
      <h3 className="font-semibold text-slate-800 mb-4">Sort By</h3>

      <div className="space-y-3 text-sm">
        {[
          { label: "Default", value: "default" },
          { label: "Price: Low → High", value: "priceLow" },
          { label: "Price: High → Low", value: "priceHigh" },
          { label: "Rating", value: "rating" },
          { label: "Name A → Z", value: "name" },
        ].map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-3 cursor-pointer select-none"
          >
            {/* Hidden native input */}
            <input
              type="radio"
              name="sort"
              value={option.value}
              checked={sortOption === option.value}
              onChange={(e) => dispatch(setSortOption(e.target.value))}
              className="hidden"
            />

            <div
              className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition
          ${
            sortOption === option.value ? "border-[#1b8caf]" : "border-gray-400"
          }`}
            >
              <div
                className={`w-2 h-2 rounded-full transition-transform duration-200
            ${
              sortOption === option.value ? "bg-[#1b8caf] scale-100" : "scale-0"
            }`}
              />
            </div>

            <span
              className={
                sortOption === option.value
                  ? "text-[#1b8caf] font-medium"
                  : "text-slate-600"
              }
            >
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default SortBy;
