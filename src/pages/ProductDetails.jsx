import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../features/products/productsSlice";
import Loader from "../components/ui/Loader";
import ErrorMessage from "../components/ui/ErrorMessage";
import ProductDetailsSkeleton from "../components/product/ProductDetailsSkeleton";
import ProductGallery from "../components/product/ProductGallery";
import ProductInformation from "../components/product/ProductInformation";
import ProductReview from "../components/product/ProductReview";

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

  if (productStatus === "loading") return <ProductDetailsSkeleton />;
  if (productStatus === "failed") return <ErrorMessage message={error} />;
  if (!selectedProduct) return null;

  return (
    <div className="space-y-12 my-2.5 mx-2.5">
      <div className="grid md:grid-cols-2 gap-10">
        <ProductGallery
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />

        <ProductInformation quantity={quantity} setQuantity={setQuantity} />
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
                <ProductReview review={review} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
