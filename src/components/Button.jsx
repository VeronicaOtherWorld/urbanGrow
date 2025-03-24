import React from "react";
import clsx from "clsx";

const sizeStyles = {
  clickBtn: "px-4 py-1 text-sm",
  introBtn: "px-6 py-2 text-base",
  bannerBtn: "px-16 py-3 text-lg",
};

const Button = ({
  children,
  size = "bannerBtn",
  bgColor = "bg-black",
  textColor = "text-white",
  className = "",
  ...props
}) => {
  return (
    <button
      className={clsx(
        "rounded-full tracking-wide font-medium",
        sizeStyles[size],
        bgColor,
        textColor,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
