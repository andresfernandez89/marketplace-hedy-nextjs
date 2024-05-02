"use client";
import { useCart } from "@/app/context/CartContext";
import { IItem } from "@/types/Cart";
import { Button } from "./ui/button";

const AddToCartButton = ({ product }: { product: IItem }) => {
  const { addItem, cart, increaseQty } = useCart();
  const cartItem = cart.find((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (cartItem) {
      increaseQty(product.id);
    } else {
      addItem(product);
    }
  };

  return (
    <Button size="sm" onClick={handleAddToCart}>
      {cartItem ? `Quantity: ${cartItem.quantity}` : "Add to Cart"}
    </Button>
  );
};

export default AddToCartButton;
