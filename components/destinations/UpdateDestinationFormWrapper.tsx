"use client";
import { redirect, useParams } from "next/navigation";
import AddDestinationForm from "./AddDestinationForm";
import { useTouristicDestination } from "@/lib/queries/touristic-destinations.queries";

export default function UpdateDestinationFormWrapper() {
  const { id } = useParams();
  const { data, error, isLoading } = useTouristicDestination(Number(id));

  if (error) {
    redirect("/");
  }

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (!data) {
    return <div>No se encontró el destino turístico</div>;
  }

  const { name, address, description, imageUrl } = data;

  return (
    <AddDestinationForm
      isEdit
      initialData={{ name, address, description, imageUrl }}
      destinationId={id as string}
    />
  );
}
