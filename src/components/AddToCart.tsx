"use client";
import { useCart } from "@/app/context/CartContext";
import { IItem } from "@/types/Cart";
import React from "react";
import { Button } from "./ui/button";

interface Props {
  product: IItem;
}

const AddToCartButton: React.FC<Props> = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <Button size="sm" onClick={handleAddToCart}>
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;
