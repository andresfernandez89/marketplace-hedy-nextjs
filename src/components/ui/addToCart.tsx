"use client";
import React from "react";
import { Button } from "./button";
import { IItem } from "@/types/Cart";
import { useCart } from "@/app/context/CartContext";

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
