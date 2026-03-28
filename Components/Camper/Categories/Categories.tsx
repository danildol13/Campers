import { Infos } from "@/types/camper";
import css from "./Categories.module.css";

interface CategoriesProps {
  camp: Infos;
}

const iconMap: Record<string, string> = {
  AC: "AC",
  kitchen: "kitchen",
  bathroom: "bathroom",
  TV: "TV",
  transmission: "automatic",
};

export default function Categories({ camp }: CategoriesProps) {
  const equipment = [
    { key: "AC", value: camp.AC },
    { key: "bathroom", value: camp.bathroom },
    { key: "kitchen", value: camp.kitchen },
    { key: "TV", value: camp.TV },
    {
      key: "transmission",
      value: camp.transmission === "automatic" ? "automatic" : null,
    },
  ].filter((item) => item.value);

  return (
    <ul className={css.categoriesContainer}>
      {equipment.map((item) => (
        <li className={css.categories} key={item.key}>
          <svg width={20} height={20}>
            <use href={`/allicons.svg#${iconMap[item.key] || item.key}`}></use>
          </svg>
          {item.key === "transmission" ? "automatic" : item.key}
        </li>
      ))}
    </ul>
  );
}
