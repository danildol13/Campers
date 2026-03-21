import { ReactNode } from "react";
import { SelectableValue } from "@/types/camper";
import css from "./SelectableButton.module.css";

interface Props {
  children: ReactNode;
  type: "radio" | "checkbox";
  name: "type" | "equipment";
  value: SelectableValue;
  paddingXClass?: string;
}

export default function SelectableButton({ children, type, name, value, paddingXClass = "van-padding" }: Props) {
  return (
    <label className={`${css[paddingXClass]} ${css.label}`}>
      <input type={type} name={name} value={value} className={css.input} />
      <div className={css.contentContainer}>{children}</div>
    </label>
  );
}
