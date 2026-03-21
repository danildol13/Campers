import SelectableButton from "@/Components/shared/SelectableButton/SelectableButton";
import css from "./Equipment.module.css";
import { equipmentOptions } from "@/types/selectableType";

export default function Equipment() {
  return (
    <div className={css.equipmentContainer}>
      <p className={css.vehicleTitle}>Vehicle equipment</p>
      <div className={css.checkboxContainer}>
        {equipmentOptions.map((option) => (
          <SelectableButton
            type="checkbox"
            name="equipment"
            value={option.value}
            key={option.value}
            paddingXClass={option.paddingX}
          >
            <svg width={32} height={32}>
              <use href={`/allicons.svg#${option.icon}`} />
            </svg>
            <span className={css.equipmentName}>{option.label}</span>
          </SelectableButton>
        ))}
      </div>
    </div>
  );
}
