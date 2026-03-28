import { mockApi } from "@/app/api/externalApi";
import api from "../lib/api";
import { Filters, Infos } from "../types/camper";

export const getCampers = async (filters: Filters, page = 1, limit = 4) => {
  const params: Record<string, string | number | string[]> = { page, limit };
  if (filters.city) params.city = filters.city;
  if (filters.type) params.type = filters.type;
  if (filters.equipment?.length) params.equipment = filters.equipment;

  const { data } = await api.get("/campers", {
    params,
    paramsSerializer: (p) => {
      const qs = new URLSearchParams();
      Object.entries(p).forEach(([key, value]) => {
        if (Array.isArray(value)) value.forEach((v) => qs.append(key, v));
        else qs.append(key, String(value));
      });
      return qs.toString();
    },
  });

  return data;
};

export const getCamperById = async (id: string) => {
  const { data } = await mockApi.get<Infos>(`/campers/${id}`);
  if (!data) throw new Error(`Camper with id ${id} not found`);
  return data;
};
