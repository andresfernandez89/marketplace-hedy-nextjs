import ProductCard from "../ProductCard";
import styles from "../../styles/cardProduct.module.css";
import React from "react";
import { IProduct } from "@/types/Api";

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
