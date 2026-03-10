import { formatPrice } from "../../utils/formatPrice";
import { useSelector } from "react-redux";

const CartSummary = () => {
  const { totalQuantity, totalPrice } = useSelector((state) => state.cart);
  return (
    <>
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
    </>
  );
};

export default CartSummary;
