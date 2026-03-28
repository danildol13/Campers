import css from "./City.module.css";

interface Props { defaultValue?: string; }

export default function City({ defaultValue = "" }: Props) {
  return (
    <div className={css.cityContainer}>
      <p className={css.cityTitle}>Location</p>
      <div className={css.innerContainer}>
        <svg width={20} height={20}><use href="/allicons.svg#icon-Map"></use></svg>
        <input type="text" name="city" placeholder="City" className={css.inputCity} defaultValue={defaultValue} />
      </div>
    </div>
  );
}
