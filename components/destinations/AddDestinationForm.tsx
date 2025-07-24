"use client";
import Input from "../core/Input";
import Button from "../core/Button";
import TextArea from "../core/TextArea";
import { useForm } from "@/hooks/use-form/useForm";
import { TouristicDestinationInput } from "@/types/touristic-destinations.types";
import { TouristicDestinationSchema } from "@/types/schemas/touristic-places.schema";
import { useCreateTouristicPlace } from "@/lib/queries/touristic-destinations.queries";
import { redirect, useRouter } from "next/navigation";

export default function AddDestinationForm() {
  const router = useRouter();
  const create = useCreateTouristicPlace();

  const { fields, onSubmit, errors, isValid, ...rest } =
    useForm<TouristicDestinationInput>({
      initialValues: {
        name: "",
        address: "",
        description: "",
        imageUrl: "",
      },
      handleSubmit: (data) => {
        create.mutate(data);
      },
      validatorSchema: TouristicDestinationSchema,
    });

  if (create.isSuccess) {
    redirect("/");
  }

  return (
    <form onSubmit={onSubmit} className="w-xl">
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
        disabled={!isValid || create.isPending}
        className="w-full mt-12"
        label={create.isPending ? "Guardando..." : "Agregar Destino"}
      />
    </form>
  );
}
