import { Infos } from "@/types/camper";

interface Props {
  camper: Infos;
}

export default function Reviews({ camper }: Props) {
  return (
    <div>
      {camper.reviews.map((review) => (
        <div key={review.reviewer_name}>
          {review.reviewer_name[0]}
          <div>
            {review.reviewer_name}
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star}>
                {star <= review.reviewer_rating ? "★" : "☆"}
              </span>
            ))}
          </div>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}
