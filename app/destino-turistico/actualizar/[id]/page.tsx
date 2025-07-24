import Card from "@/components/core/Card";
import UpdateDestinationFormWrapper from "@/components/destinations/UpdateDestinationFormWrapper";
import { getTouristicDestination } from "@/lib/api/touristic-destinations.api";
import { getQueryClient } from "@/lib/react-query";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

type UpdateDestinationPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function UpdateDestinationPage({
  params,
}: UpdateDestinationPageProps) {
  const { id } = await params;
  const qc = getQueryClient();
  await qc.prefetchQuery({
    queryKey: ["touristic-destination", id],
    queryFn: () => getTouristicDestination(Number(id)),
  });

  return (
    <Card>
      <h2 className="text-4xl text-center font-semibold my-8">
        Actualizar destino turístico
      </h2>
      <div className="my-4 mb-12 w-full">
        <HydrationBoundary state={dehydrate(qc)}>
          <UpdateDestinationFormWrapper />
        </HydrationBoundary>
      </div>
    </Card>
  );
}
