import { mockApi } from "@/app/api/externalApi";
import api from "../lib/api";
import { Filters, Infos } from "../types/camper";

type GetCampersParams = Filters & {
  page: number;
  limit: number;
};

export const getCampers = async (
  filters: Filters,
  page: number = 1,
  limit: number = 4,
) => {
  const params: GetCampersParams = {
    ...filters,
    page,
    limit,
  };

  
  if (!filters.city) delete params.city;
  if (!filters.equipment || filters.equipment.length === 0) delete params.equipment;
  if (!filters.type) delete params.type;

  const { data } = await api.get("/campers", {
    params: params,
    paramsSerializer: (params) => {
      const cleanURL = new URLSearchParams();
      Object.entries(params).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((v) => cleanURL.append(key, v));
        } else {
          cleanURL.append(key, value);
        }
      });
      return cleanURL.toString();
    },
  });

  return data;
};


export const getCamperById = async (id: string) => {
  const { data } = await mockApi.get<Infos>(`/campers/${id}`);
  return data
}