import TouristicDestinationsList from "@/components/destinations/TouristicDestinationsList";
import { getTouristicDestinations } from "@/lib/api/touristic-destinations.api";
import { getQueryClient } from "@/lib/react-query";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import Image from "next/image";

export default async function Home() {
  const qc = getQueryClient();
  // Prefetch the first page of touristic destinations so that the data is available
  // reducing loading states for the user.
  await qc.prefetchQuery({
    queryKey: ["touristic-destinations", 1],
    queryFn: () => getTouristicDestinations({ page: 1, limit: 6 }),
  });

  return (
    <div className="">
      <Image
        src="/images/hero.png"
        width={1920}
        height={400}
        alt="hero"
        className="w-full object-cover h-[50vh]"
      />
      <Image
        src="/images/band.png"
        width={1920}
        height={67}
        className="w-full object-cover h-[67px]"
        alt="band"
      />
      <HydrationBoundary state={dehydrate(qc)}>
        <TouristicDestinationsList />
      </HydrationBoundary>
    </div>
  );
}
