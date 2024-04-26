"use client";
import {
  type ICartContextType,
  type ICartProviderProps,
  type IItem,
} from "@/types/Cart";
import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext<ICartContextType | null>(null);

export function CartProvider({ children }: ICartProviderProps) {
  const [cart, setCart] = useState<IItem[]>([]);

  useEffect(() => {
    const storageCart = localStorage.getItem("cart");
    if (storageCart) {
      setCart(JSON.parse(storageCart));
    }
  }, []);

  function updateStorageAndCart(newCart: IItem[]) {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }
  function addItem(item: IItem) {
    const updatedCart = [...cart, item];
    updateStorageAndCart(updatedCart);
  }
  function deleteItem(itemId: IItem["id"]) {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    updateStorageAndCart(updatedCart);
  }
  function clear() {
    localStorage.clear();
    setCart([]);
  }

  const contextValue: ICartContextType = {
    cart,
    updateStorageAndCart,
    addItem,
    deleteItem,
    clear,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error(
      "useShoppingCart must be used within a ShoppingCartProvider",
    );
  }
  return context;
}
