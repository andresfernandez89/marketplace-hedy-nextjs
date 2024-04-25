"use client";
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

type User = {
  uid: string;
  email: string;
  displayName: string;
};

type AppContextType = {
  user: User | null;
  signOut: () => Promise<void>;
  signIn: () => Promise<void>;
};

const AppContext = createContext<AppContextType | null>(null);

interface Props {
  children: ReactNode;
}

export default function AppWrapper({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user: FirebaseUser | null) => {
        if (user) {
          const newUser: User = {
            uid: user.uid,
            displayName: user.displayName || "",
            email: user.email || "",
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
      console.error("Error al iniciar sesión con Google:", error);
      alert(
        "Hubo un error al iniciar sesión. Por favor, inténtalo de nuevo más tarde.",
      );
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
      alert("Sesión cerrada");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
      alert(
        "Hubo un error al cerrar sesión. Por favor, inténtalo de nuevo más tarde.",
      );
    }
  };

  return (
    <AppContext.Provider value={{ user, signOut, signIn: signInWithGoogle }}>
      {children}
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
