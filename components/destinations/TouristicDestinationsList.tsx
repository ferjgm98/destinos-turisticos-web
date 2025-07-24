"use client";

import { useTouristicDestinationsPage } from "@/lib/queries/touristic-destinations.queries";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "../core/Button";
import { useState } from "react";
import { ChevronLeft } from "../icons/ChevronLeft";
import { ChevronRight } from "../icons/ChevronRight";
import TouristicDestinationItem from "./TouristicDestinationItem";

export default function TouristicDestinationsList() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [pagination, setPagination] = useState<{ page: number; limit: number }>(
    {
      page: Number(searchParams.get("page")) || 1,
      limit: Number(searchParams.get("limit")) || 20,
    }
  );

  const { data, refetch } = useTouristicDestinationsPage(
    pagination.page,
    pagination.limit
  );

  const handlePagination = (page: number) => {
    setPagination({
      page,
      limit: pagination.limit,
    });
    router.push(`/destinations?page=${page}&limit=${pagination.limit}`);
    refetch();
  };

  return (
    <div className="w-2/3 mx-auto">
      <div className="flex justify-end items-center gap-4 mt-10">
        <Button
          label={<ChevronLeft className="w-6 h-6" />}
          disabled={!data?.meta?.hasPreviousPage}
          onClick={() =>
            data?.meta?.hasPreviousPage &&
            handlePagination(data?.meta?.page - 1)
          }
        />
        <p className="text-sm">
          Página {data?.meta?.page} de {data?.meta?.totalPages}
        </p>
        <Button
          label={<ChevronRight className="w-6 h-6" />}
          disabled={!data?.meta?.hasNextPage}
          onClick={() =>
            data?.meta?.hasNextPage && handlePagination(data?.meta?.page + 1)
          }
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {data?.data.map((destination) => (
          <TouristicDestinationItem key={destination.id} item={destination} />
        ))}
      </div>
    </div>
  );
}
