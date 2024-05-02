export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
}

export interface AppContextType {
  user: User | null;
  signOut: () => Promise<void>;
  signIn: () => Promise<void>;
}
