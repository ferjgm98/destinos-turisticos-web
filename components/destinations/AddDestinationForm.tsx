"use client";
import Input from "../core/Input";
import Button from "../core/Button";
import TextArea from "../core/TextArea";
import { useForm } from "@/hooks/use-form/useForm";
import { TouristicDestinationInput } from "@/types/touristic-destinations.types";
import { TouristicDestinationSchema } from "@/types/schemas/touristic-places.schema";
import {
  useCreateTouristicPlace,
  useUpdateTouristicPlace,
} from "@/lib/queries/touristic-destinations.queries";
import { redirect } from "next/navigation";

type AddDestinationFormProps = {
  isEdit?: boolean;
  initialData?: TouristicDestinationInput;
  destinationId?: string;
};

export default function AddDestinationForm({
  isEdit = false,
  initialData,
  destinationId,
}: AddDestinationFormProps) {
  const create = useCreateTouristicPlace();
  const update = useUpdateTouristicPlace(
    destinationId ? Number(destinationId) : 0
  );

  // Switch mutation based on isEdit flag
  const mutation = isEdit ? update : create;

  const { fields, onSubmit, errors, isValid, ...rest } =
    useForm<TouristicDestinationInput>({
      initialValues: initialData || {
        name: "",
        address: "",
        description: "",
        imageUrl: "",
      },
      handleSubmit: (data) => {
        mutation.mutate(data);
      },
      validatorSchema: TouristicDestinationSchema,
    });

  if (mutation.isSuccess) {
    redirect("/");
  }

  const buttonText = mutation.isPending
    ? isEdit
      ? "Actualizando..."
      : "Guardando..."
    : isEdit
    ? "Actualizar Destino"
    : "Agregar Destino";

  return (
    <form onSubmit={onSubmit} className="w-full md:w-xl mx-auto">
      <Input
        name="name"
        value={fields.name}
        {...rest}
        label="Nombre"
        className="w-full"
        containerClassName="my-3"
        error={errors?.name}
      />
      <Input
        name="address"
        value={fields.address}
        {...rest}
        label="Dirección"
        containerClassName="my-3"
        error={errors?.address}
      />
      <TextArea
        name="description"
        value={fields.description}
        {...rest}
        label="Descripción"
        containerClassName="my-3"
        error={errors?.description}
      />
      <Input
        name="imageUrl"
        value={fields.imageUrl}
        {...rest}
        label="URL de Imagen"
        containerClassName="my-3"
        error={errors?.imageUrl}
      />
      <Button
        disabled={!isValid || mutation.isPending}
        className="w-full mt-12"
        label={buttonText}
      />
    </form>
  );
}
