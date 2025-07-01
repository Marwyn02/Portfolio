import React from "react";
import clsx from "clsx";

const Button = ({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  disabled = false,
}) => {
  const variantClasses = {
    primary: "bg-white text-black border hover:bg-gray-200",
    secondary:
      "bg-black/50 text-white/90 border border-black hover:bg-black hover:text-white",
    danger: "bg-red-600 text-white hover:bg-red-700",
    success: "bg-green-600 text-white hover:bg-green-700",
    outline: "border border-gray-400 text-gray-800 hover:bg-gray-200",
    ghost: "text-gray-600 hover:bg-gray-100",
  };

  const sizeClasses = {
    sm: "h-8 px-3 text-sm",
    md: "h-12 px-5 text-base",
    lg: "h-16 px-8 text-lg",
  };

  return (
    <button
      type={type}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-md whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all cursor-pointer duration-300",
        variantClasses[variant],
        sizeClasses[size],
        disabled ? "opacity-50 cursor-not-allowed" : "",
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
