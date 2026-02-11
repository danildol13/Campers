import css from "./Container.module.css";

interface Props {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "xxl" | "fluid";
  className?: string
}

export default function Container({ children, size = "xxl", className }: Props) {
  return <div className={`${css[size]} ${css.container} ${className || ""}`}>{children}</div>;
}
