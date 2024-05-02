"use client";
import { useCart } from "@/app/context/CartContext";
import { Button } from "@/components/ui/button";
import { IItem } from "@/types/Cart";
import styles from "../styles/cardProduct.module.css";

export default function Counter({ product }: { product: IItem }) {
  const { cart, addItem, increaseQty, decreaseQty, deleteItem } = useCart();
  const cartItem = cart.find((item) => item.id === product.id);

  const handleIncrement = () => {
    if (cartItem) {
      increaseQty(product.id);
    } else {
      addItem(product);
    }
  };

  const handleDecrement = () => {
    if (cartItem && cartItem.quantity > 0) {
      if (cartItem.quantity === 1) {
        deleteItem(product.id);
      } else {
        decreaseQty(product.id);
      }
    }
  };

  return (
    <div
      className={`${styles.productCounter} flex items-center gap-x-2 px-2 py-2`}
    >
      <Button
        className={`${styles.counterBtn} h-9 w-9 text-base font-bold`}
        size="sm"
        variant="outline"
        onClick={handleDecrement}
        disabled={!cartItem || cartItem.quantity <= 0}
      >
        <span>-</span>
      </Button>
      <span className={`${styles.counter} font-bold`}>
        {cartItem ? cartItem.quantity : 0}
      </span>
      <Button
        className={`${styles.counterBtn} h-9 w-9 text-base font-bold`}
        size="sm"
        variant="outline"
        onClick={handleIncrement}
      >
        <span>+</span>
      </Button>
    </div>
  );
}
