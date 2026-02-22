import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../features/products/productsSlice";
import { addToCart } from "../features/cart/cartSlice";
import Loader from "../components/ui/Loader";
import ErrorMessage from "../components/ui/ErrorMessage";
import { formatPrice } from "../utils/formatPrice";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { selectedProduct, productStatus, error } = useSelector(
    (state) => state.products,
  );

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setSelectedImage(selectedProduct.images[0]);
    }
  }, [selectedProduct]);

  if (productStatus === "loading") return <Loader />;
  if (productStatus === "failed") return <ErrorMessage message={error} />;
  if (!selectedProduct) return null;

  const handleAddToCart = () => {
    dispatch(addToCart({ ...selectedProduct, quantity }));
    toast.success("Added to cart");
  };

  return (
    <div className="space-y-12 my-2.5 mx-2.5">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-xl shadow-sm flex justify-center">
            <img
              src={selectedImage}
              alt={selectedProduct.title}
              className="max-h-96 object-contain"
            />
          </div>

          <div className="flex gap-3 overflow-x-auto">
            {selectedProduct.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="thumb"
                onClick={() => setSelectedImage(img)}
                className={`h-16 w-16 object-contain border rounded cursor-pointer ${
                  selectedImage === img ? "border-gray-400" : "border-gray-200"
                }`}
              />
            ))}
          </div>
        </div>

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
                🚚 <strong>Shipping:</strong>{" "}
                {selectedProduct.shippingInformation}
              </p>
            )}

            {selectedProduct.warrantyInformation && (
              <p>
                🛡 <strong>Warranty:</strong>{" "}
                {selectedProduct.warrantyInformation}
              </p>
            )}

            {selectedProduct.returnPolicy && (
              <p>
                🔁 <strong>Returns:</strong> {selectedProduct.returnPolicy}
              </p>
            )}
          </div>
        </div>
      </div>

      {selectedProduct.reviews?.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-slate-800">
              Customer Reviews
            </h2>

            <div className="text-yellow-500 font-medium">
              ⭐ {selectedProduct.rating} / 5
            </div>
          </div>

          <div className="space-y-6">
            {selectedProduct.reviews.map((review, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-6 last:border-none"
              >
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <p className="font-medium text-slate-800">
                      {review.reviewerName}
                    </p>
                    <p className="text-xs text-slate-400">
                      {new Date(review.date).toLocaleDateString()}
                    </p>
                  </div>

                  <div className="flex text-yellow-500 text-sm">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star}>
                        {star <= review.rating ? "★" : "☆"}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {review.comment}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
