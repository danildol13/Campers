import api from "../lib/api";
import { CityType } from "../types/camper";

export const getCities = async () => {
  try {
    const { data } = await api.get<CityType[]>("/filters");
    return data;
  } catch (error) {
    console.error("Request failed:", error);
    return []; 
  }
};
