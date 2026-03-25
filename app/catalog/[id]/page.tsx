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
    <section className={css.infoSection}>
      <Container>
        <p className={css.camperName}>{data.name}</p>
        <div className={css.camperInfos}>
          <div className={css.leftInfoSide}>
            <svg height={16} width={16}>
              <use href="/allicons.svg#icon-Rating-colored"></use>
            </svg>
            <p>
              {data.rating}({data.reviews.length} Reviews)
            </p>
          </div>
          <div className={css.rightInfoSide}>
            <svg width={16} height={16}>
              <use href="/allicons.svg#icon-Map"></use>
            </svg>
            {data.location}
          </div>
        </div>
        <p className={css.camperPrice}>€{data.price.toFixed(2)}</p>
        <div className={css.gallery}>
          {data.gallery.map((photo, index) => (
            <Image
              key={index}
              src={photo.thumb}
              alt={data.name}
              width={292}
              height={312}
              className={css.galleryImage}
            />
          ))}
        </div>
        <p className={css.description}>{data.description}</p>
        <CamperDetails camper={data} />
      </Container>
    </section>
  );
}
