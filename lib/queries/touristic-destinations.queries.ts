import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTouristicPlace } from "../api/touristic-destinations.api";

export const useCreateTouristicPlace = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: createTouristicPlace,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["touristic-destinations", 1] });
    },
  });
};
