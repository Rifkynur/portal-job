"use client";
import React, { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { clsx } from "clsx";

type ButtonProps = {
  variant?: "primary" | "secondary" | "primaryOutline" | "secondaryOutline";
  icon?: ReactNode;
  size?: "sm" | "md" | "lg" | "full";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, icon, size = "md", variant = "primary", className, ...props }, ref) => {
  const variants = {
    primary: "bg-bg-blue text-white hover:bg-blue-900",
    secondary: "bg-secondary text-bg-blue hover:bg-bg-blue hover:text-primary",
    primaryOutline: "bg-primary text-bg-blue border border-bg-blue hover:bg-bg-blue hover:text-primary",
    secondaryOutline: "bg-secondary text-bg-blue border border-bg-blue hover:bg-bg-blue hover:text-primary ",
  };

  const baseClass = "flex items-center gap-2 rounded-md font-medium transition-all cursor-pointer";
  const sizeClass = {
    sm: "text sm py-1 px-3",
    md: "text base py-2 px-4",
    lg: "text lg py-3 px-5",
    full: "w-full py-3 px-5",
  };

  const classNames = clsx(baseClass, variants[variant], sizeClass[size], className);
  return (
    <button ref={ref} className={classNames} {...props}>
      {children} {icon && icon}
    </button>
  );
});

export default Button;
