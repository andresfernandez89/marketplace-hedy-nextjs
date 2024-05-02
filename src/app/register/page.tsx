"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import Link from "next/link";
import styles from "../../styles/auth.module.css";
import Image from "next/image";
import logoGoogle from "../../../public/google.png";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

export default function Register() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { signIn } = useAuth();
  const router = useRouter();

  const notify = () =>
    toast.success("Successfully signed up.", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  const notifyError = () => {
    toast.error("Something went wrong. Try it later please.", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      notify();
      router.push("/");
    } catch (err) {
      notifyError();
      console.error(err);
    }
  };
  return (
    <>
      <div className={styles.authContainer}>
        <div className={styles.authMain}>
          <h2 className={styles.title}>Sign up</h2>
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
          <label className={styles.formLabel}>
            <input
              className={styles.formInput}
              type="email"
              placeholder="Email"
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
          <button className={styles.submitBtn} onClick={handleRegister}>
            Sign up
          </button>
          <p>
            Do you already have an account?{" "}
            <Link href="/login" className={styles.registerLink}>
              Log in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
