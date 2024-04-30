"use client";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../app/context/AuthContext";
import cartImg from "../../public/cart.png";
import logoUser from "../../public/user.png";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signIn, signOut } = useAuth();
  const { cart } = useCart();
  const menuRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const [isCartUpdated, setIsCartUpdated] = useState<boolean>(false);

  let countProd = 0;

  const storageCart = localStorage.getItem("cart");

  if (storageCart !== null) {
    const cartArray = JSON.parse(storageCart);
    let totalProd = 0;
    for (const product of cartArray) {
      totalProd += product.quantity;
      countProd = totalProd;
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLoginClick = () => {
    signIn();
    setIsMenuOpen(false);
  };

  const handleLogoutClick = () => {
    signOut();
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node) &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      setIsCartUpdated(true);
      setTimeout(() => {
        setIsCartUpdated(false);
      }, 1000);
    }
  }, [cart]);

  return (
    <nav className={`${styles.navbarContainer} w-full p-3`}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center"></div>
          <div className="flex flex-1 sm:items-center sm:justify-start">
            <div className="ml-6 sm:block">
              <div className="flex items-center space-x-4">
                <h5>HY</h5>
                <Link
                  href="/"
                  className={`${styles.link} flex items-center rounded-md px-1 py-2 text-sm text-gray-300`}
                  aria-current="page"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={`${styles.link} flex items-center rounded-md px-1 py-2 text-sm text-gray-300`}
                >
                  About
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link href="/cart">
              <Image
                src={cartImg}
                alt="cart"
                width="0"
                height="0"
                className={styles.cart}
                // className={`${styles.cart} ${isCartUpdated ? styles.show : ""}`}
                style={{ width: "60px", height: "auto" }}
                priority
              />
              {countProd != 0 && (
                <div className={styles.countItem}>
                  <p
                    className={`${styles.cart} ${isCartUpdated ? styles.show : ""}`}
                  >
                    {countProd}
                  </p>
                </div>
              )}
            </Link>
            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  onClick={toggleMenu}
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  {user ? (
                    <Image
                      className="h-6 w-6 rounded-full"
                      src={user.photoURL}
                      alt="User photo"
                      width={60}
                      height={60}
                    />
                  ) : (
                    <Image
                      src={logoUser}
                      alt="User logo"
                      width={60}
                      height={60}
                      className={`${styles.logoUser} h-6 w-6 rounded-full`}
                    />
                  )}
                </button>
              </div>
              {isMenuOpen && (
                <div
                  ref={userMenuRef}
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex={-1}
                >
                  {user ? (
                    <button
                      onClick={handleLogoutClick}
                      className="block px-4 py-1 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex={-1}
                    >
                      Logout
                    </button>
                  ) : (
                    <button
                      onClick={handleLoginClick}
                      className="block px-4 py-1 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex={-1}
                    >
                      Log in with Google
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
