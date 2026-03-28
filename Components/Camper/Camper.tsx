import { Infos } from "@/types/camper";
import css from "./Camper.module.css";
import Image from "next/image";
import Link from "next/link";
import Categories from "./Categories/Categories";
import Button from "../shared/Button/Button";
import { useCamperStore } from "@/store/camperStore";

interface CamperProp {
  oneCamp: Infos;
}

export default function Camper({ oneCamp }: CamperProp) {
  const isLiked = useCamperStore((state) => state.favorites.includes(oneCamp.id));
  const toggleFavorite = useCamperStore((state) => state.toggleFavorite);
  return (
    <div className={css.camper}>
      <div className={css.pictureContainer}>
        <Image
          width={292}
          height={320}
          src={oneCamp.gallery[0]?.thumb}
          alt={oneCamp.name}
        />
      </div>
      <div className={css.rightSideContainer}>
        <div className={css.upperContainer}>
          <h2 className={css.title}>{oneCamp.name}</h2>
          <div className={css.priceContainer}>
            <p className={css.price}>€{oneCamp.price.toFixed(2)}</p>
            <button
              type="button"
              onClick={() => toggleFavorite(oneCamp.id)}
              className={isLiked ? css.liked : css.normal}
            >
              <svg width={24} height={21}>
                <use href="/allicons.svg#icon-heart"></use>
              </svg>
            </button>
          </div>
        </div>
        <div className={css.infosContainer}>
          <div className={css.firstPart}>
            <svg height={16} width={16}>
              <use href="/allicons.svg#icon-Rating-colored"></use>
            </svg>
            <p>
              {oneCamp.rating}({oneCamp.reviews.length})
            </p>
          </div>
          <div className={css.secondPart}>
            <svg width={16} height={16}>
              <use href="/allicons.svg#icon-Map"></use>
            </svg>
            {oneCamp.location}
          </div>
        </div>
        <p className={css.description}>{oneCamp.description}</p>
        <Categories camp={oneCamp} />
        <Link href={`/catalog/${oneCamp.id}`}>
          <Button style="showMoreButton">Show more</Button>
        </Link>
      </div>
    </div>
  );
}
