"use client";
import Input from "../core/Input";
import Button from "../core/Button";
import TextArea from "../core/TextArea";
import { useForm } from "@/hooks/use-form/useForm";
import * as z from "zod";

const REQUIRED_MESSAGE = "Este campo es requerido";
const URL_MESSAGE = "Ingresa una URL valida";

const DestinationItemSchema = z.object({
  name: z.string().min(1, REQUIRED_MESSAGE),
  address: z.string().min(1, REQUIRED_MESSAGE),
  description: z.string().min(1, REQUIRED_MESSAGE),
  imageUrl: z.url(URL_MESSAGE),
});

export type DestinationItem = z.infer<typeof DestinationItemSchema>;

export default function AddDestinationForm() {
  const { fields, onSubmit, errors, ...rest } = useForm<DestinationItem>({
    initialValues: {
      name: "",
      address: "",
      description: "",
      imageUrl: "",
    },
    handleSubmit: (data) => console.log(data),
    validatorSchema: DestinationItemSchema,
  });

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
      <Button className="w-full mt-12" label="Agregar Destino" />
    </form>
  );
}
