"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../app/context/AuthContext";
import cart from "../images/cart.png";
import logoGoogle from "../images/google.png";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signIn, signOut } = useAuth();
  const menuRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

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

  return (
    <nav className="w-full bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center "></div>
          <div className="flex flex-1 sm:items-stretch sm:justify-start">
            <div className="m:ml-6 sm:block">
              <div className="flex space-x-4">
                <p className="rounded-md px-1 py-2 text-sm font-medium text-gray-300">
                  Logo
                </p>
                <Link
                  href="/"
                  className="rounded-md px-1 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
                <Link
                  href="/product"
                  className="rounded-md px-1 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Products
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button type="button">
              <Image
                src={cart}
                alt="cart"
                width="0"
                height="0"
                className={styles.cart}
                style={{ width: "80px", height: "auto" }}
                priority
              />
            </button>
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
                      className="h-8 w-8 rounded-full"
                      src={user.photoURL}
                      alt="User photo"
                      width={60}
                      height={100}
                    />
                  ) : (
                    <Image
                      src={logoGoogle}
                      alt="Google logo"
                      className="h-8 w-8 rounded-full"
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
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex={-1}
                    >
                      Logout
                    </button>
                  ) : (
                    <button
                      onClick={handleLoginClick}
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex={-1}
                    >
                      Login
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
