import { http } from "@/lib/api/http";
import {
  TouristicDestination,
  TouristicDestinationInput,
} from "@/types/touristic-destinations.types";

const baseRoute = "/touristic-destinations";

export const getTouristicPlaces = async (params: {
  page: number;
  limit: number;
}) => {
  return http<TouristicDestination[]>(
    `${baseRoute}?${new URLSearchParams(params as any).toString()}`
  );
};

export const getTouristicPlace = async (id: number) => {
  return http<TouristicDestination>(`${baseRoute}/${id}`);
};

export const createTouristicPlace = async (data: TouristicDestinationInput) => {
  return http<TouristicDestination>(`${baseRoute}`, {
    method: "POST",
    body: JSON.stringify(data),
  });
};
