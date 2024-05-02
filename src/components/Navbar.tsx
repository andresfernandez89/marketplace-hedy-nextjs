"use client";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../app/context/AuthContext";
import cartImg from "../../public/cart.png";
import logoUser from "../../public/user.png";
import styles from "../styles/navbar.module.css";
import { auth } from "@/app/firebase/firebaseConfig";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { cart } = useCart();
  const menuRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const [isCartUpdated, setIsCartUpdated] = useState<boolean>(false);
  const [countProd, setCountProd] = useState<number>(0);
  const currentUser = auth.currentUser;

  useEffect(() => {
    let totalProd = 0;
    for (const product of cart) {
      totalProd += product.quantity;
    }
    setCountProd(totalProd);
  }, [cart]);

  const renderUserAvatar = () => {
    const currentUser = auth.currentUser;

    if (currentUser) {
      if (currentUser.photoURL) {
        return (
          <Image
            src={currentUser.photoURL}
            alt="User photo"
            width={60}
            height={60}
            className="h-6 w-6 rounded-full"
          />
        );
      } else {
        const userInitial = currentUser.email
          ? currentUser.email.charAt(0).toUpperCase()
          : "";
        return (
          <div
            className="flex h-6 w-6 items-center justify-center rounded-full text-white"
            style={{
              fontSize: "15px",
              border: "1px solid whitesmoke",
              fontWeight: "bold",
            }}
          >
            <span>{userInitial}</span>
          </div>
        );
      }
    } else {
      return (
        <Image
          src={logoUser}
          alt="User logo"
          width={60}
          height={60}
          className={`${styles.logoUser} h-6 w-6 rounded-full`}
        />
      );
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
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
                {currentUser && (
                  <Link
                    href="/profile"
                    className={`${styles.link} flex items-center rounded-md px-1 py-2 text-sm text-gray-300`}
                  >
                    Profile
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link href="/cart">
              <Image
                src={cartImg}
                alt="cart"
                width={0}
                height={0}
                className={styles.cart}
                style={{ width: "60px", height: "auto" }}
                priority
              />
              {countProd != 0 && (
                <div className={styles.countItem}>
                  <p className={`${isCartUpdated ? styles.show : ""}`}>
                    {countProd}
                  </p>
                </div>
              )}
            </Link>
            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none"
                  onClick={toggleMenu}
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  {renderUserAvatar()}
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
                      Log out
                    </button>
                  ) : (
                    <button onClick={closeMenu}>
                      <Link
                        href="/login"
                        className="block px-4 py-1 text-sm text-gray-900"
                      >
                        Log in
                      </Link>
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
