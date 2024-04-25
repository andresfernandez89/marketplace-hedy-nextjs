import React, { ButtonHTMLAttributes, ReactNode } from "react";

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
      className={`flex h-16 w-28 items-center justify-center rounded border-2 border-slate-300 bg-inherit p-6 font-bold text-slate-300 shadow-md transition delay-150 ease-in-out hover:bg-slate-300 hover:text-slate-800 ${isFocused ? "scale-105 bg-slate-300 text-slate-800" : ""}`}
    >
      {children}
    </button>
  );
};

export default CategoryButton;
