import { http } from "@/lib/api/http";
import { PaginatedResponse } from "@/types/base.types";
import {
  TouristicDestination,
  TouristicDestinationInput,
} from "@/types/touristic-destinations.types";

const baseRoute = "/touristic-destinations";

export const getTouristicDestinations = async (params: {
  page: number;
  limit: number;
}): Promise<PaginatedResponse<TouristicDestination>> => {
  return http<PaginatedResponse<TouristicDestination>>(
    `${baseRoute}?${new URLSearchParams(params as any).toString()}`
  );
};

export const getTouristicDestination = async (id: number) => {
  return http<TouristicDestination>(`${baseRoute}/${id}`);
};

export const createTouristicDestination = async (
  data: TouristicDestinationInput
) => {
  return http<TouristicDestination>(`${baseRoute}`, {
    method: "POST",
    body: JSON.stringify(data),
  });
};
