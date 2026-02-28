import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  if (!products || products.length === 0) {
    return (
      <div className="flex justify-center text-slate-600 mt-2.5 p-2.5 text-2xl min-h-[calc(100vh-5.5rem)]">
        No products found.
      </div>
    );
  }
  return (
    <>
      <h2 className="font-semibold text-3xl text-slate-800 mb-2 text-center mt-2.5">
        PRODUCTS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-2.5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductGrid;
