"use client";
import { useCart } from "@/app/context/AuthContext";
import { Product } from "@/types/cart";
import { Button } from "./button";

interface Props {
  product: Product;
}

const AddToCartButton: React.FC<Props> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Button size="sm" onClick={handleAddToCart}>
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;
