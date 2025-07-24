import { PaginatedResponse } from "@/types/base.types";
import { TouristicDestination } from "@/types/touristic-destinations.types";
import { QueryClient } from "@tanstack/react-query";

export const updateTouristicDestinationsFromCache = (
  qc: QueryClient,
  id: number,
  likes?: number
) => {
  qc.setQueryData<TouristicDestination>(
    ["touristic-destination", id],
    (old) => {
      if (!old) return old;

      return {
        ...old,
        _count: {
          likes: likes ?? old._count.likes + 1,
        },
      };
    }
  );
  qc.getQueryCache()
    .findAll({ queryKey: ["touristic-destinations"] })
    .forEach(({ queryKey }) => {
      qc.setQueryData<PaginatedResponse<TouristicDestination>>(
        queryKey,
        (old) =>
          old
            ? {
                ...old,
                data: old?.data?.map((item) =>
                  item.id === id
                    ? {
                        ...item,
                        _count: { likes: likes ?? item._count.likes + 1 },
                      }
                    : item
                ),
              }
            : old
      );
    });
};
