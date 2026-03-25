import { Infos } from "@/types/camper";
import css from "./Reviews.module.css";

interface Props {
  camper: Infos;
}

export default function Reviews({ camper }: Props) {
  return (
    <div className={css.reviewSection}>
      {camper.reviews.map((review) => (
        <div className={css.review} key={review.reviewer_name}>
          <div className={css.upperInfos}>
            <div className={css.name}>{review.reviewer_name[0]}</div>
            <div className={css.nextToInfos}>
              {review.reviewer_name}
              <div className={css.stars}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star}>
                    {star <= review.reviewer_rating ? (
                      <svg width={16} height={16}>
                        <use href="/allicons.svg#icon-Rating-colored"></use>
                      </svg>
                    ) : (
                      <svg width={16} height={16}>
                        <use href="/allicons.svg#icon-rating"></use>
                      </svg>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <p className={css.comment}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}
