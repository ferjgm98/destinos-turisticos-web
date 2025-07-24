"use client";

import { getQueryClient } from "@/lib/react-query";
import { HydrationBoundary, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

export default function ReactQueryProvider({
  children,
  ...props
}: PropsWithChildren) {
  const queryClient = getQueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={(props as any)?.dehydratedState}>
        {children}
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
