"use client";
import Link from "next/link";
import Container from "../Container/Container";
import css from "./Header.module.css";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();
  return (
    <section className={css.headerSection}>
      <Container className={css.headerContainer}>
        <Link href="/">
          <svg width={125} height={16}>
            <use href="icons.svg#icon-Logo"></use>
          </svg>
        </Link>

        <nav>
          <ul className={css.navigation}>
            <li>
              <Link
                href="/"
                className={path === "/" ? css.active : css.inactive}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/catalog"
                className={path === "/catalog" ? css.active : css.inactive}
              >
                Catalog
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </section>
  );
}
