import Card from "@/components/core/Card";
import TouristicDestinationDetails from "@/components/destinations/TouristicDestinationDetails";
import { getTouristicDestination } from "@/lib/api/touristic-destinations.api";
import { getQueryClient } from "@/lib/react-query";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function TouristicDestinationPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const qc = getQueryClient();
  await qc.prefetchQuery({
    queryKey: ["touristic-destination", id],
    queryFn: () => getTouristicDestination(Number(id)),
  });

  return (
    <Card>
      <HydrationBoundary state={dehydrate(qc)}>
        <TouristicDestinationDetails />
      </HydrationBoundary>
    </Card>
  );
}
