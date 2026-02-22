import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/formatPrice";
import toast from "react-hot-toast";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    // e.stopPropogation();
    dispatch(addToCart(product));
    toast.success("Added to cart");
  };
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden group">
      <Link to={`/product/${product.id}`}>
        <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
          <img
            src={product.thumbnail || product.image}
            alt={product.title}
            className="h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      <div className="p-4 flex flex-col justify-between h-40">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-sm font-semibold text-slate-800 line-clamp-2 hover:text-[#1b8caf] transition">
            {product.title}
          </h3>
        </Link>

        <div className="mt-2 flex items-center justify-between">
          <span className="text-lg font-bold text-slate-900">
            {formatPrice(product.price)}
          </span>

          <button
            onClick={handleAddToCart}
            className="bg-[#1b8caf] hover:bg-[#146f87] text-white text-sm px-3 py-1.5 rounded-lg transition duration-200"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
