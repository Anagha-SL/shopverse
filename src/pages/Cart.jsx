import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../features/cart/cartSlice";
import { formatPrice } from "../utils/formatPrice";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Cart = () => {
  const dispatch = useDispatch();

  const { items, totalPrice, totalQuantity } = useSelector(
    (state) => state.cart,
  );

  // 🟡 Empty Cart State
  if (items.length === 0) {
    return (
      <div className="text-center py-20 space-y-4 m-2.5">
        <h2 className="text-2xl font-semibold text-slate-700">
          Your cart is empty
        </h2>
        <Link
          to="/"
          className="inline-block bg-[#1b8caf] hover:bg-[#146f87] text-white px-6 py-3 rounded-lg transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-3 gap-10 m-2.5">
      <div className="lg:col-span-2 space-y-6">
        <h2 className="text-2xl font-semibold text-slate-800">
          Shopping Cart ({totalQuantity})
        </h2>

        {items.map((item) => (
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
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 space-y-6 h-fit">
        <h3 className="text-xl font-semibold text-slate-800">Order Summary</h3>

        <div className="flex justify-between text-slate-600">
          <span>Items</span>
          <span>{totalQuantity}</span>
        </div>

        <div className="flex justify-between text-slate-600">
          <span>Subtotal</span>
          <span>{formatPrice(totalPrice)}</span>
        </div>

        <div className="flex justify-between font-semibold text-slate-800 border-t pt-4">
          <span>Total</span>
          <span>{formatPrice(totalPrice)}</span>
        </div>

        <button
          className="w-full bg-[#1b8caf] hover:bg-[#146f87] text-white py-3 rounded-lg transition"
          onClick={() => {
            dispatch(clearCart());
            toast.success("Order placed successfully 🎉");
          }}
        >
          Proceed to Checkout
        </button>

        <button
          onClick={() => dispatch(clearCart())}
          className="w-full text-red-500 hover:text-red-600 text-sm"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
