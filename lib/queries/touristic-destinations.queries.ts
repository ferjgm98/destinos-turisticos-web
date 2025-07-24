import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  createTouristicDestination,
  getTouristicDestinations,
} from "../api/touristic-destinations.api";

export const useTouristicDestinationsPage = (page: number, limit = 6) =>
  useQuery({
    queryKey: ["touristic-destinations", page, limit],
    queryFn: () => getTouristicDestinations({ page, limit }),
    placeholderData: keepPreviousData,
    staleTime: 60000,
  });

export const useCreateTouristicPlace = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: createTouristicDestination,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["touristic-destinations", 1] });
    },
  });
};
