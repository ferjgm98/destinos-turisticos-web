"use client";

import { useTouristicDestinationsPage } from "@/lib/queries/touristic-destinations.queries";
import Link from "next/link";
import { useParams } from "next/navigation";
import Button from "../core/Button";
import Image from "next/image";

export default function TouristicDestinationsList() {
  const { page = 1, limit = 20 } = useParams();
  const { data } = useTouristicDestinationsPage(Number(page), Number(limit));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-2/3 mx-auto">
      {data?.data.map((destination) => (
        <div key={destination.id} className="rounded-lg shadow-md mx-4 my-10">
          {/* Using regular image tag and not NextJS due to each image url is from a different host */}
          <img
            src={destination.imageUrl}
            alt={destination.name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-10">
            <h4 className="text-2xl font-extrabold text-center mb-8">
              {destination.name}
            </h4>
            <p className="my-12 text-ellipsis">
              {destination.description?.substring(0, 255) +
                (destination.description?.length > 255 ? "..." : "")}
            </p>
            <p className="text-sm">{destination.address}</p>

            <Link
              href={`/destinations/${destination.id}`}
              className="italic text-center text-sm block my-8 hover:underline"
            >
              Ver más
            </Link>
            <Button label="Eliminar" className="w-full bg-td-secondary" />
          </div>
        </div>
      ))}
    </div>
  );
}
