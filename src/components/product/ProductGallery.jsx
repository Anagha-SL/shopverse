import { useSelector } from "react-redux";

const ProductGallery = ({ selectedImage, setSelectedImage }) => {
  const { selectedProduct } = useSelector((state) => state.products);
  return (
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
  );
};

export default ProductGallery;
