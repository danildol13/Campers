"use client";
import Container from "@/Components/Container/Container";
import css from "./catalog.module.css";
import Filter from "@/Components/Filter/Filter";

export default function Catalog() {
  return (
    <section className={css.catalogSection}>
      <Container>
        <div className={css.catalog}>
          <aside>
            <Filter/>
          </aside>
          <h1>Catalog</h1>
        </div>
      </Container>
    </section>
  );
}
