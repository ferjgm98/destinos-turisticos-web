"use client";

import { useTouristicDestination } from "@/lib/queries/touristic-destinations.queries";
import { redirect, useParams } from "next/navigation";
import TouristicDestinationItem from "./TouristicDestinationItem";

export default function TouristicDestinationDetails() {
  const { id } = useParams();
  const { data, error, isLoading } = useTouristicDestination(Number(id));

  if (error) {
    redirect("/");
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No se encontró el destino turístico</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto">
      <TouristicDestinationItem item={data} onDelete={() => {}} isDetails />
    </div>
  );
}
