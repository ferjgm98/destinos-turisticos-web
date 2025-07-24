import {
  keepPreviousData,
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  createTouristicDestination,
  deleteTouristicDestination,
  getTouristicDestination,
  getTouristicDestinations,
  likeTouristicDestination,
} from "../api/touristic-destinations.api";
import { updateTouristicDestinationsFromCache } from "./queries.helper";

export const useTouristicDestinationsPage = (page: number, limit = 6) =>
  useQuery({
    queryKey: ["touristic-destinations", page],
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

export const useDeleteTouristicDestination = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: deleteTouristicDestination,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["touristic-destinations", 1] });
    },
  });
};

export const useTouristicDestination = (id: number) => {
  return useQuery({
    queryKey: ["touristic-destination", id],
    queryFn: () => getTouristicDestination(id),
  });
};

export const useLikeTouristicDestination = (id: number) => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: () => likeTouristicDestination(id),
    onMutate: async () => {
      updateTouristicDestinationsFromCache(qc, id);
    },
    onSuccess: ({ likes }) => {
      updateTouristicDestinationsFromCache(qc, id, likes);
    },
    onSettled: () => {
      qc.invalidateQueries({ queryKey: ["touristic-destinations"] });
      qc.invalidateQueries({ queryKey: ["touristic-destination", id] });
    },
  });
};
