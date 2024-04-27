"use client";
import Image from "next/image";
import { useAuth } from "../app/context/AuthContext";

export default function Auth() {
  const { user, signIn, signOut } = useAuth();

  return (
    <>
      <div>
        {!user ? (
          <button onClick={signIn}>Login</button>
        ) : (
          <div>
            <button onClick={signOut}>Logout</button>
            <Image
              src={user.photoURL}
              alt="Foto de perfil"
              width={100}
              height={100}
              layout="responsive"
              blurDataURL={user.photoURL}
              placeholder="blur"
            />
          </div>
        )}
      </div>
    </>
  );
}
