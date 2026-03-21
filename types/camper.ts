// API Response
export interface ApiResponse {
  total: number;
  items: Infos[];
}

// Camper data
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
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: VehicleTypes;
  length: string;
  width: string;
  height: string;
  tank: string;
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

// Filter types
export type CityType =
  | "Ukraine, Kyiv"
  | "Ukraine, Poltava"
  | "Ukraine, Dnipro"
  | "Ukraine, Odesa"
  | "Ukraine, Kharkiv"
  | "Ukraine, Sumy"
  | "Ukraine, Lviv";

export type EquipmentType = "AC" | "kitchen" | "bathroom" | "TV" | "automatic";

export type VehicleTypes = "panelTruck" | "fullyIntegrated" | "alcove";

export type TransmissionType = "automatic";

export type SelectableValue = EquipmentType | VehicleTypes;

export interface Filters {
  city?: CityType | "";
  equipment?: EquipmentType[];
  type?: VehicleTypes | "";
}

// Constants
export const firstCategories = [
  "AC",
  "kitchen",
  "TV",
  "bathroom",
  "radio",
  "refrigerator",
  "microwave",
  "gas",
  "water",
] as const;

export const vehicleDetails = [
  "form",
  "length",
  "width",
  "height",
  "tank",
  "consumption",
] as const;
