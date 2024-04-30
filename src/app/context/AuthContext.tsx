"use client";
import { type User, type AppContextType } from "@/types/Auth";
import { type Product, type CartContextType } from "@/types/cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  User as FirebaseUser,
} from "firebase/auth";
import { app } from "@/app/firebase/firebaseConfig";

const auth = getAuth(app);

const AppContext = createContext<AppContextType | null>(null);
const CartContext = createContext<CartContextType | null>(null);

interface Props {
  children: ReactNode;
}

export default function AppWrapper({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user: FirebaseUser | null) => {
        if (user) {
          const newUser: User = {
            uid: user.uid,
            displayName: user.displayName || "",
            email: user.email || "",
            photoURL: user.photoURL || "",
          };
          setUser(newUser);
        } else {
          setUser(null);
        }
      },
    );
    return () => unsubscribe();
  }, []);

  const provider = new GoogleAuthProvider();
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in with Google.", error);
      alert("There was an error signing in. Please try again later");
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Error signing out with Google.", error);
      alert("There was an error signing out. Please try again later");
    }
  };

  return (
    <AppContext.Provider value={{ user, signOut, signIn: signInWithGoogle }}>
      {/* <CartContext.Provider value={{ cart, addToCart, clearCart }}> */}
      <ToastContainer />
      {children}
      {/* </CartContext.Provider> */}
    </AppContext.Provider>
  );
}

export const useAuth = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAuth debe ser utilizado dentro de un AuthProvider");
  }
  return context;
};

// export const useCart = (): CartContextType => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error(
//       "useCarrito debe ser utilizado dentro de un CarritoProvider",
//     );
//   }
//   return context;
// };
