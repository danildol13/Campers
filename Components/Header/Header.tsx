"use client";
import Link from "next/link";
import Container from "../shared/Container/Container";
import css from "./Header.module.css";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();
  const isActive = (href: string) =>
    path === href ? css.active : css.inactive;
  return (
    <section className={css.headerSection}>
      <Container className={css.headerContainer}>
        <Link href="/">
          <svg width={125} height={16}>
            <use href="/allicons.svg#icon-Logo"></use>
          </svg>
        </Link>
        <nav>
          <ul className={css.navigation}>
            <li>
              <Link href="/" className={isActive("/")}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/catalog" className={isActive("/catalog")}>
                Catalog
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </section>
  );
}
