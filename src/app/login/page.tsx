"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/app/firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import styles from "../../styles/auth.module.css";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import Image from "next/image";
import logoGoogle from "../../../public/google.png";
import { toast } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();

  const router = useRouter();

  const notify = () =>
    toast.success("Successfully logged in.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  const notifyError = () => {
    toast.error("Something went wrong. Try it later please.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      notify();
      setEmail("");
      setPassword("");
      router.push("/");
    } catch (err) {
      notifyError();
      console.error("Failed to login:", err);
    }
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authMain}>
        <h2 className={styles.title}>Log in</h2>
        <div className={styles.loginBtnContainer}>
          <Image
            className="h-6 w-6 rounded-full"
            src={logoGoogle}
            alt="Google logo"
            width={60}
            height={60}
          />
          <button onClick={signIn}>Continue with Google</button>
        </div>
        <p>or:</p>

        <form onSubmit={handleLogin}>
          <label className={styles.formLabel}>
            <input
              className={styles.formInput}
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className={styles.formLabel}>
            <input
              className={styles.formInput}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className={styles.passwordRequirements}>
              Password must be at least 6 characters long
            </span>
          </label>

          <button className={styles.submitBtn} type="submit">
            Sign in
          </button>
        </form>
        <p>
          You do not have an account?{" "}
          <Link href="/register" className={styles.registerLink}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
