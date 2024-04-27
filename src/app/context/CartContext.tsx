"use client";
import {
  type ICartContextType,
  type ICartProviderProps,
  type IItem,
} from "@/types/Cart.d";
import { createContext, useContext, useEffect, useState } from "react";
export const CartContext = createContext<ICartContextType | null>(null);

export function CartProvider({ children }: ICartProviderProps) {
  const [cart, setCart] = useState<IItem[]>([]);
  const [totalSpent, setTotalSpent] = useState<number>(0);
  const [totalByProduct, setTotalByProduct] = useState<{
    [productId: number]: number;
  }>({});

  useEffect(() => {
    const storageCart = localStorage.getItem("cart");
    if (storageCart) {
      const parsedCart = JSON.parse(storageCart);
      setCart(parsedCart);
      const spent = parsedCart.reduce(
        (total: number, product: { price: number; quantity: number }) =>
          total + product.price * product.quantity,
        0,
      );
      setTotalSpent(spent);

      const updatedTotalByProduct: { [productId: number]: number } = {};
      parsedCart.forEach(
        (product: { id: any; price: number; quantity: number }) => {
          const productId = product.id;
          const productTotal = product.price * product.quantity;
          updatedTotalByProduct[productId] =
            (updatedTotalByProduct[productId] || 0) + productTotal;
        },
      );
      setTotalByProduct(updatedTotalByProduct);
    }
  }, []);

  function updateStorageAndCart(newCart: IItem[]) {
    const updatedCart = newCart.map((item) => ({
      ...item,
      total: item.price * item.quantity,
    }));
    setCart(updatedCart);
    const spent = updatedCart.reduce(
      (total, product) => total + product.price * product.quantity,
      0,
    );
    setTotalSpent(spent);

    const updatedTotalByProduct: { [productId: number]: number } = {};
    updatedCart.forEach((product) => {
      const productId = product.id;
      const productTotal = product.price * product.quantity;
      updatedTotalByProduct[productId] =
        (updatedTotalByProduct[productId] || 0) + productTotal;
    });
    setTotalByProduct(updatedTotalByProduct);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  function addItem(item: IItem) {
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === item.id,
    );

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      updateStorageAndCart(updatedCart);
    } else {
      const newItem: IItem = { ...item, quantity: 1 };
      const updatedCart = [...cart, newItem];
      updateStorageAndCart(updatedCart);
    }
  }

  function deleteItem(itemId: number) {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    updateStorageAndCart(updatedCart);
  }

  function clear() {
    localStorage.clear();
    setCart([]);
  }

  function increaseQty(itemId: number) {
    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item,
    );
    updateStorageAndCart(updatedCart);
  }

  function decreaseQty(itemId: number) {
    const updatedCart = cart.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item,
    );
    updateStorageAndCart(updatedCart);
  }

  const contextValue: ICartContextType = {
    cart,
    totalSpent,
    totalByProduct,
    updateStorageAndCart,
    addItem,
    deleteItem,
    clear,
    increaseQty,
    decreaseQty,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
