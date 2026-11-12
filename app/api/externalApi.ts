import axios from "axios";
import { Infos, VehicleTypes } from "@/types/camper";

// The old mockapi.io project was removed; GoIT moved the data here.
export const campersApi = axios.create({
  baseURL: "https://campers-api.goit.study/",
});

// ---- Shapes returned by the new API ----
interface RemoteGallery {
  thumb: string;
  original: string;
}

interface RemoteReview {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

interface RemoteCamper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string;
  engine: string;
  amenities: string[];
  coverImage?: string;
  gallery?: RemoteGallery[];
  totalReviews?: number;
}

interface RemoteList {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: RemoteCamper[];
}

const FORM_MAP: Record<string, VehicleTypes> = {
  panel_van: "panelTruck",
  integrated: "fullyIntegrated",
  alcove: "alcove",
  semi_integrated: "semiIntegrated",
};

// Convert the new API shape into the shape the app already uses.
function toInfos(c: RemoteCamper, reviews: RemoteReview[] = []): Infos {
  const has = (a: string) => c.amenities.includes(a);
  const gallery =
    c.gallery && c.gallery.length > 0
      ? c.gallery.map(({ thumb, original }) => ({ thumb, original }))
      : c.coverImage
        ? [{ thumb: c.coverImage, original: c.coverImage }]
        : [];

  return {
    id: c.id,
    name: c.name,
    price: c.price,
    rating: c.rating,
    location: c.location,
    description: c.description,
    form: FORM_MAP[c.form] ?? (c.form as VehicleTypes),
    length: c.length,
    width: c.width,
    height: c.height,
    tank: c.tank,
    consumption: c.consumption,
    transmission: c.transmission,
    engine: c.engine,
    AC: has("ac"),
    bathroom: has("bathroom"),
    kitchen: has("kitchen"),
    TV: has("tv"),
    radio: has("radio"),
    refrigerator: has("refrigerator"),
    microwave: has("microwave"),
    gas: has("gas"),
    water: has("water"),
    gallery,
    reviews,
    totalReviews: c.totalReviews ?? reviews.length,
  };
}

const PER_PAGE = 10; // API maximum

export async function fetchAllCampers(): Promise<Infos[]> {
  const { data: first } = await campersApi.get<RemoteList>("/campers", {
    params: { page: 1, perPage: PER_PAGE },
  });

  const rest = await Promise.all(
    Array.from({ length: Math.max(first.totalPages - 1, 0) }, (_, i) =>
      campersApi
        .get<RemoteList>("/campers", {
          params: { page: i + 2, perPage: PER_PAGE },
        })
        .then((r) => r.data.campers),
    ),
  );

  return [first.campers, ...rest].flat().map((c) => toInfos(c));
}

export async function fetchCamperById(id: string): Promise<Infos> {
  const [{ data: camper }, { data: reviews }] = await Promise.all([
    campersApi.get<RemoteCamper>(`/campers/${id}`),
    campersApi.get<RemoteReview[]>(`/campers/${id}/reviews`),
  ]);
  return toInfos(camper, reviews);
}
