const ProductCardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      {/* Image Placeholder */}
      <div className="w-full h-40 bg-gray-200 animate-pulse rounded-lg mb-4"></div>

      {/* Title */}
      <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4 mb-2"></div>

      {/* Price */}
      <div className="h-4 bg-gray-200 animate-pulse rounded w-1/2 mb-4"></div>

      {/* Button */}
      <div className="h-8 bg-gray-200 animate-pulse rounded-full w-full"></div>
    </div>
  );
};

export default ProductCardSkeleton;
