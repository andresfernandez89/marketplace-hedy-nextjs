import ProductCard from "./ProductCard";
import { Product } from "../app/page";

interface ProductsGridProps {
  products: Product[];
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ products }) => {
  return (
    <div className="m-8 grid grid-cols-3 gap-x-20 gap-y-8 self-center">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
