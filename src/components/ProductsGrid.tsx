import ProductCard from "./ProductCard";

const ProductsGrid = () => {
  return (
    <div className="m-8 grid grid-cols-5 gap-4 self-center">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductsGrid;
