import BookingForm from "@/Components/BookingForm/BookingForm";
import CamperDetails from "@/Components/CamperDetails/CamperDetails";
import Container from "@/Components/shared/Container/Container";
import Image from "next/image";
import css from "./oneCamperPage.module.css";
import { getCamperById } from "@/services/filterServices";

export default async function CatalogDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const data = await getCamperById(id);

  return (
    <section>
      <Container>
        <p>{data.name}</p>
        <div>
          <div>
            <svg height={16} width={16}>
              <use href="/allicons.svg#icon-Rating-colored"></use>
            </svg>
            <p>
              {data.rating}({data.reviews.length})
            </p>
          </div>
          <div>
            <svg width={16} height={16}>
              <use href="/allicons.svg#icon-Map"></use>
            </svg>
            {data.location}
          </div>
          <p>€{data.price.toFixed(2)}</p>
        </div>
        <div>
          {data.gallery.map((photo, index) => (
            <Image
              key={index}
              src={photo.thumb}
              alt={data.name}
              width={292}
              height={312}
            />
          ))}
        </div>
        <p>{data.description}</p>
        <div className={css.detailsLayout}>
          <CamperDetails camper={data} />
          <BookingForm />
        </div>
      </Container>
    </section>
  );
}
