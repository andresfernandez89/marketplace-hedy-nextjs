import { createContext, useContext, useEffect, useState } from "react";
import {
  type ICartContextType,
  type ICartProviderProps,
  type IItem,
} from "@/types/Cart";

export const CartContext = createContext<ICartContextType | null>(null);

export function CartProvider({ children }: ICartProviderProps) {
  const [cart, setCart] = useState<IItem[]>([]);

  useEffect(() => {
    const storageCart = localStorage.getItem("cart");
    if (storageCart) {
      setCart(JSON.parse(storageCart));
    }
  }, []);

  function addItem(item: IItem) {
    localStorage.setItem("cart", JSON.stringify([...cart, item]));
    setCart([...cart, item]);
  }
  function deleteItem(itemId: IItem["id"]) {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  }
  function clear() {
    localStorage.clear();
    setCart([]);
  }

  const contextValue: ICartContextType = {
    cart,
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
