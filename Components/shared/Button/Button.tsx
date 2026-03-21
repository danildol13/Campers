import { ReactNode } from "react";
import css from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  style?: "showMoreButton" | "loadMoreButton" | "searchButton";
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  children,
  type = "button",
  style,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${css.button} ${style ? css[style] : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
