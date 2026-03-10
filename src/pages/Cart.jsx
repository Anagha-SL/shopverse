import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";

const Cart = () => {
  const dispatch = useDispatch();

  const { items, totalQuantity } = useSelector((state) => state.cart);

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
          <CartItem item={item} />
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 space-y-6 h-fit">
        <CartSummary />

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
