export interface ApiResponse {
  total: number;
  items: Infos[];
}

export interface Gallery {
  thumb: string;
  original: string;
}

interface Reviews {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

export interface Infos {
  id: number;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: VehicleType;
  length: string;
  width: string;
  height: string;
  tank: number;
  consumption: string;
  transmission: string;
  engine: string;
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
  gallery: Gallery[];
  reviews: Reviews[];
}





export type CityType =
  | "Ukraine, Kyiv"
  | "Ukraine, Poltava"
  | "Ukraine, Dnipro"
  | "Ukraine, Odesa"
  | "Ukraine, Kharkiv"
  | "Ukraine, Sumy"
  | "Ukraine, Lviv";

export type EquipmentType = "AC" | "kitchen" | "bathroom" | "TV";

export type VehicleType = "panelTruck" | "fullyIntegrated" | "alcove";

export type TransmissionType = "automatic";