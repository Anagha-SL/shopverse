import { useDispatch } from "react-redux";
import { formatPrice } from "../../utils/formatPrice";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../features/cart/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div
      key={item.id}
      className="bg-white rounded-xl shadow-sm p-6 flex flex-col md:flex-row gap-6"
    >
      <img
        src={item.thumbnail || item.image}
        alt={item.title}
        className="h-24 w-24 object-contain bg-gray-50 p-2 rounded"
      />

      <div className="flex-1 space-y-3">
        <h3 className="font-medium text-slate-800">{item.title}</h3>

        <p className="text-[#1b8caf] font-semibold">
          {formatPrice(item.price)}
        </p>

        <div className="flex items-center gap-4">
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <button
              onClick={() => dispatch(decreaseQuantity(item.id))}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition"
            >
              −
            </button>

            <span className="px-6 py-2 font-medium">{item.quantity}</span>

            <button
              onClick={() => dispatch(increaseQuantity(item.id))}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition"
            >
              +
            </button>
          </div>

          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className="text-red-500 hover:text-red-600 text-sm"
          >
            Remove
          </button>
        </div>
      </div>

      <div className="font-semibold text-slate-800">
        {formatPrice(item.price * item.quantity)}
      </div>
    </div>
  );
};

export default CartItem;
