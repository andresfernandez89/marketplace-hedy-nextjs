import styles from "@/styles/cardProduct.module.css";
import { IProduct } from "@/types/Api";
import ProductCard from "./ProductCard";

interface ProductsGridProps {
  products: IProduct[];
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ products }) => {
  return (
    <div className={styles.cardProductContainer}>
      <div className={styles.cardProduct}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
