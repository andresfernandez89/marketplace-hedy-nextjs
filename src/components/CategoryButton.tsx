import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

const CategoryButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button className="flex h-16 w-28 items-center justify-center rounded border-2 border-slate-300 bg-inherit p-6 font-bold text-slate-300 shadow-md hover:bg-slate-300 hover:text-slate-800">
      {children}
    </button>
  );
};

export default CategoryButton;
