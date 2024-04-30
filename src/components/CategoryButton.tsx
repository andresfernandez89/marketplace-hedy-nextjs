import React, { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "../styles/cardProduct.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  isFocused: boolean;
}

const CategoryButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  isFocused,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={`${isFocused ? "scale-105 bg-slate-300 text-slate-800" : ""} ${styles.categoryButton}`}
    >
      {children}
    </button>
  );
};

export default CategoryButton;
