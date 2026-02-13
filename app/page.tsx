import Link from "next/link";
import css from "./page.module.css";
import Container from "@/Components/Container/Container";

export default async function Home() {
  return (
    <section className={css.homeSection}>
      <Container className={css.homeContainer}>
        <div className={css.homeContent}>
          <h1 className={css.title}>Campers of your dreams</h1>
          <p className={css.subtitle}>
            You can find everything you want in our catalog
          </p>
          <Link href="/catalog" className={css.viewNowLink}>
            View Now
          </Link>
        </div>
      </Container>
    </section>
  );
}
