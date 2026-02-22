import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    // e.stopPropogation();
    dispatch(addToCart(product));
  };
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden group">
      {/* Product Image */}
      <Link to={`/product/${product.id}`}>
        <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
          <img
            src={product.thumbnail || product.image}
            alt={product.title}
            className="h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-4 flex flex-col justify-between h-40">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-sm font-semibold text-slate-800 line-clamp-2 hover:text-teal-600 transition">
            {product.title}
          </h3>
        </Link>

        <div className="mt-2 flex items-center justify-between">
          <span className="text-lg font-bold text-slate-900">
            {/* {formatPrice(product.price)} */}
            {product.price}
          </span>

          <button
            onClick={handleAddToCart}
            className="bg-teal-500 hover:bg-teal-600 text-white text-sm px-3 py-1.5 rounded-lg transition duration-200"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
