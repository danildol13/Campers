import Container from "@/Components/Container/Container";
import css from "./catalog.module.css";

export default function Catalog() {
  return (
    <section className={css.catalogSection}>
      <Container>
        <div className={css.catalog}>
          <aside>
            Embrace simplicity and freedom with the Mavericks panel truck...
          </aside>
          <h1>Catalog</h1>
        </div>
      </Container>
    </section>
  );
}
