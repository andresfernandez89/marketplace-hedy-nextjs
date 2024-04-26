import { IProduct } from "./Api";

export interface ICartProviderProps {
  children: ReactNode;
}

export interface IItem {
  id: IProduct["id"];
  title: IProduct["title"];
  image: IProduct["image"];
  price: IProduct["price"];
  quantity: number;
  total: number;
}

export interface ICartContextType {
  cart: IItem[];
  updateStorageAndCart: (newCart: IItem[]) => void;
  addItem: (item: IItem) => void;
  deleteItem: (itemId: IItem["id"]) => void;
  clear: () => void;
}
