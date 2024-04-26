export interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}
export interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  clearCart: () => void;
}
