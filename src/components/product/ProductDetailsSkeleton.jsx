const ProductDetailsSkeleton = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 animate-pulse my-2.5 mx-2.5">
      <div className="w-full md:w-1/2 h-80 bg-gray-200 rounded-lg"></div>

      <div className="flex-1 space-y-4">
        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        <div className="h-20 bg-gray-200 rounded"></div>
        <div className="h-10 bg-gray-200 rounded-full w-1/3"></div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
