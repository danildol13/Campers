import City from "./City/City";
import css from "./Filter.module.css";
import { CityType, Filters, EquipmentType, VehicleTypes } from "../../types/camper";
import Equipment from "./Equipment/Equipment";
import VehicleTypeFilter from "./VehicleType/VehicleType";
import Button from "../shared/Button/Button";
import { useCallback } from "react";
import { useCamperStore } from "@/store/camperStore";

interface Props { onFilterChange: (newData: Filters) => void; }

export default function Filter({ onFilterChange }: Props) {
  const filters = useCamperStore((state) => state.filters);

  const handleSearch = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const newFilters: Filters = {
      city: ((data.city as string)?.trim() as CityType) || "",
      equipment: (formData.getAll("equipment") as EquipmentType[]) || [],
      type: (data.type as VehicleTypes) || "",
    };
    onFilterChange(newFilters);
  }, [onFilterChange]);

  return (
    <div>
      <form onSubmit={handleSearch} autoComplete="off">
        <City defaultValue={filters.city || ""} />
        <p className={css.filterTitle}>Filters</p>
        <Equipment selectedValues={filters.equipment || []} />
        <VehicleTypeFilter selectedValue={filters.type || ""} />
        <Button style="searchButton" type="submit">Search</Button>
      </form>
    </div>
  );
}