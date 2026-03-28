import SelectableButton from "@/Components/shared/SelectableButton/SelectableButton";
import css from "./VehicleType.module.css";
import { vehicleOptions } from "@/types/selectableType";

interface Props { selectedValue: string; }

export default function VehicleType({ selectedValue }: Props) {
  return (
    <div className={css.vehicleContainer}>
      <p className={css.vehicleTitle}>Vehicle type</p>
      <div className={css.typeContainer}>
        {vehicleOptions.map((option) => (
          <SelectableButton key={option.value} type="radio" name="type" value={option.value} paddingXClass={option.paddingX} defaultChecked={option.value === selectedValue}>
            <svg width={32} height={32}><use href={`/allicons.svg#${option.icon}`} /></svg>
            <span className={css.iconName}>{option.label}</span>
          </SelectableButton>
        ))}
      </div>
    </div>
  );
}
