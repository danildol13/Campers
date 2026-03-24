import { Infos, firstCategories, vehicleDetails } from "@/types/camper";
import css from "./Features.module.css";

interface Props {
  camper: Infos;
}

export default function Features({ camper }: Props) {
  return (
    <div className={css.featuresCard}>
      <div className={css.categoriesCard}>
        {camper.transmission === "automatic" && (
          <div className={css.categories}>
            <svg width={20} height={20}>
              <use href="/allicons.svg#automatic"></use>
            </svg>
            <span className={css.categoryName}>automatic</span>
          </div>
        )}
        {firstCategories.map((category) => (
          <div key={category} className={css.categories}>
            <svg width={20} height={20}>
              <use href={`/allicons.svg#${category}`}></use>
            </svg>
            <span className={css.categoryName}>{category}</span>
          </div>
        ))}
      </div>
      <div className={css.detailsBlock}>
        <p className={css.detailsTitle}>Vehicle details</p>
        <div className={css.details}>
          {vehicleDetails.map((key) => (
            <div className={css.oneDetail} key={key}>
              <span>{`${key[0].toUpperCase()}${key.slice(1)}`}</span>
              <span>{`${camper[key][0].toUpperCase()}${camper[key].slice(1)}`}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
