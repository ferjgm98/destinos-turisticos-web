import { TouristicDestination } from "@/types/touristic-destinations.types";
import Link from "next/link";
import Button from "../core/Button";
import { HeartIcon } from "../icons/Heart.icon";
import { useLikeTouristicDestination } from "@/lib/queries/touristic-destinations.queries";
import Modal from "../core/Modal";
import { useState } from "react";

export type TouristicDestinationItemProps = {
  item: TouristicDestination;
  isDetails?: boolean;
  onDelete: () => void;
};

export default function TouristicDestinationItem({
  item,
  isDetails = false,
  onDelete,
}: TouristicDestinationItemProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const like = useLikeTouristicDestination(item.id);

  return (
    <div
      key={item.id}
      className={`flex flex-col rounded-lg mx-4 md:my-10 ${
        isDetails ? "" : "shadow-md"
      }`}
    >
      {/* Using regular image tag and not NextJS due to each image url is from a different host */}
      <img
        src={item.imageUrl}
        alt={item.name}
        className={`w-full object-cover object-center rounded-t-lg ${
          isDetails ? "h-96" : "h-48"
        }`}
      />
      <div className="p-8 py-10 md:p-10 flex flex-col justify-between flex-1">
        <div className="flex justify-center items-center relative">
          <h4 className="text-2xl font-extrabold text-center">{item.name}</h4>
          <Button
            className="bg-transparent absolute -right-4 md:-right-8 -top-8 md:-top-10 group"
            onClick={() => like.mutate()}
            label={
              <div className="flex items-center gap-1 text-td-tertiary group-hover:text-td-tertiary/80">
                <HeartIcon className="w-5 h-5 text-td-tertiary group-hover:text-td-tertiary/80" />
                <p className="text-xs">{item._count.likes}</p>
              </div>
            }
          />
        </div>
        <p className="my-8 text-ellipsis">
          {isDetails
            ? item.description
            : item.description?.substring(0, 255) +
              (item.description?.length > 255 ? "..." : "")}
        </p>
        <p className="text-sm">{item.address}</p>
        {!isDetails && (
          <div>
            <Link
              href={`/destino-turistico/${item.id}`}
              className="italic text-center text-sm block my-6 mb-2 hover:underline"
            >
              Ver más
            </Link>
            <Button
              label="Eliminar"
              className="w-full !bg-td-secondary"
              onClick={() => setIsModalOpen(true)}
            />
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
              <h2 className="text-center font-semibold text-2xl mb-4">
                Eliminar destino turístico
              </h2>
              <p className="pb-4">
                ¿Estás seguro de querer eliminar este destino turístico?
              </p>
              <div className="flex justify-end gap-2">
                <Button
                  className="!bg-td-secondary px-3"
                  label="Cancelar"
                  onClick={() => setIsModalOpen(false)}
                />
                <Button
                  className=" px-3"
                  label="Eliminar"
                  onClick={() => {
                    onDelete();
                    setIsModalOpen(false);
                  }}
                />
              </div>
            </Modal>
          </div>
        )}
      </div>
    </div>
  );
}
