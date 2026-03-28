import { ReactNode } from "react";
import { SelectableValue } from "@/types/camper";
import css from "./SelectableButton.module.css";

interface Props {
  children: ReactNode;
  type: "radio" | "checkbox";
  name: "type" | "equipment";
  value: SelectableValue;
  paddingXClass?: string;
  defaultChecked?: boolean;
}

export default function SelectableButton({ children, type, name, value, paddingXClass = "van-padding", defaultChecked }: Props) {
  return (
    <label className={`${css[paddingXClass]} ${css.label}`}>
      <input type={type} name={name} value={value} className={css.input} defaultChecked={defaultChecked} />
      <div className={css.contentContainer}>{children}</div>
    </label>
  );
}
