import { IProduct } from "./Api";

export interface ICartProviderProps {
  children: ReactNode;
}

export interface IItem {
  quantity: ReactNode;
  id: IProduct["id"];
  title: IProduct["title"];
  image: IProduct["image"];
  price: IProduct["price"];
  // quantity: number;
}

export interface ICartContextType {
  cart: IItem[];
  totalSpent: number;
  totalByProduct: { [productId: number]: number };
  updateStorageAndCart: (newCart: IItem[]) => void;
  addItem: (item: IItem) => void;
  deleteItem: (itemId: IItem["id"]) => void;
  clear: () => void;
  increaseQty: (itemId: IItem["id"]) => void;
  decreaseQty: (itemId: IItem["id"]) => void;
}
