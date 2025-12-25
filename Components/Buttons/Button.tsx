"use client";

import React, { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...rest
}: ButtonProps) {
  const baseStyle =
    "inline-flex items-center justify-center px-5 py-2 rounded-full font-medium transition-all duration-500 ease-in-out cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  let variantStyle = "";

  switch (variant) {
    case "primary":
      variantStyle =
        "text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500";
      break;

    case "secondary":
      variantStyle =
        "border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white";
      break;

    case "ghost":
      variantStyle =
        "text-pink-400 hover:text-white hover:bg-pink-500/20";
      break;
  }

  return (
    <button
      className={`${baseStyle} ${variantStyle} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
