import SelectableButton from "@/Components/shared/SelectableButton/SelectableButton";
import css from "./VehicleType.module.css";
import { vehicleOptions } from "@/types/selectableType";

export default function VehicleType() {
  return (
    <div className={css.vehicleContainer}>
      <p className={css.vehicleTitle}>Vehicle type</p>
      <div className={css.typeContainer}>
        {vehicleOptions.map((option) => (
          <SelectableButton key={option.value} type="radio" name="type" value={option.value} paddingXClass={option.paddingX}>
            <svg width={32} height={32}><use href={`/allicons.svg#${option.icon}`} /></svg>
            <span className={css.iconName}>{option.label}</span>
          </SelectableButton>
        ))}
      </div>
    </div>
  );
}
