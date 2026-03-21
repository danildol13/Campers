import css from "./City.module.css";

export default function City() {
  return (
    <div className={css.cityContainer}>
      <p className={css.cityTitle}>Location</p>
      <div className={css.innerContainer}>
        <svg width={20} height={20}><use href="/allicons.svg#icon-Map"></use></svg>
        <input type="text" name="city" placeholder="City" className={css.inputCity} />
      </div>
    </div>
  );
}
