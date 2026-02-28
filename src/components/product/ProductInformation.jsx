import { formatPrice } from "../../utils/formatPrice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import toast from "react-hot-toast";

const ProductInformation = ({ quantity, setQuantity }) => {
  const { selectedProduct } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({ ...selectedProduct, quantity }));
    toast.success("Added to cart");
  };
  
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-slate-800">
        {selectedProduct.title}
      </h1>

      <div className="flex items-center gap-2 text-yellow-500">
        ⭐ {selectedProduct.rating}
      </div>

      <p className="text-2xl font-semibold text-[#1b8caf]">
        {formatPrice(selectedProduct.price)}
      </p>

      <p className="text-slate-600">{selectedProduct.description}</p>

      <div className="flex items-center gap-4">
        <span className="font-medium text-slate-700">Quantity:</span>

        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <button
            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition"
            disabled={quantity === 1}
          >
            −
          </button>

          <span className="px-6 py-2 font-medium text-slate-800">
            {quantity}
          </span>

          <button
            onClick={() =>
              setQuantity((prev) =>
                selectedProduct.stock
                  ? Math.min(selectedProduct.stock, prev + 1)
                  : prev + 1,
              )
            }
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition"
            disabled={
              selectedProduct.stock && quantity >= selectedProduct.stock
            }
          >
            +
          </button>
        </div>
      </div>

      <button
        onClick={handleAddToCart}
        className="bg-[#1b8caf] hover:bg-[#146f87] text-white px-6 py-3 rounded-lg transition"
      >
        Add to Cart
      </button>

      <div className="bg-gray-50 p-4 rounded-lg space-y-2 text-sm text-slate-600">
        {selectedProduct.shippingInformation && (
          <p>
            🚚 <strong>Shipping:</strong> {selectedProduct.shippingInformation}
          </p>
        )}

        {selectedProduct.warrantyInformation && (
          <p>
            🛡 <strong>Warranty:</strong> {selectedProduct.warrantyInformation}
          </p>
        )}

        {selectedProduct.returnPolicy && (
          <p>
            🔁 <strong>Returns:</strong> {selectedProduct.returnPolicy}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductInformation;
