"use client";

import { updateTouristicDestinationsFromCache } from "@/lib/queries/queries.helper";
import { useSocket } from "@/lib/socket";
import { useQueryClient } from "@tanstack/react-query";

export function WSBridge() {
  const qc = useQueryClient();

  useSocket<{ touristicDestinationId: number; likes: number }>(
    "touristicDestinationLiked",
    (data) => {
      const { touristicDestinationId, likes } = data;
      updateTouristicDestinationsFromCache(qc, touristicDestinationId, likes);
    }
  );

  return null;
}
