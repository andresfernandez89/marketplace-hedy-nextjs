"use client";
import { useAuth } from "../../context/AuthContext";

export default function Auth() {
  const { user, signIn, signOut } = useAuth();

  return (
    <>
      <div>
        {!user ? (
          <button onClick={signIn}>Iniciar sesión</button>
        ) : (
          <div>
            <button onClick={signOut}>Cerrar sesión</button>
            <h4>Hola {user.displayName}</h4>
          </div>
        )}
      </div>
    </>
  );
}
