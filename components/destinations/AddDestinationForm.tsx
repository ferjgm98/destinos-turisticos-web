"use client";
import { DOMAttributes, useState } from "react";
import Input, { InputProps } from "../core/Input";
import Button from "../core/Button";
import TextArea from "../core/TextArea";
import { useForm } from "@/hooks/use-form/useForm";

export type DestinationItem = {
  name: string;
  address: string;
  description: string;
  imageUrl: string;
};

export default function AddDestinationForm() {
  const { fields, onChange, onSubmit } = useForm<DestinationItem>({
    initialValues: {
      name: "",
      address: "",
      description: "",
      imageUrl: "",
    },
    handleSubmit: (data) => console.log(data),
  });

  return (
    <form onSubmit={onSubmit} className="w-xl">
      <Input
        name="name"
        value={fields.name}
        onChange={onChange}
        label="Nombre"
        className="w-full"
        containerClassName="my-3"
      />
      <Input
        name="address"
        value={fields.address}
        onChange={onChange}
        label="Dirección"
        containerClassName="my-3"
      />
      <TextArea
        name="description"
        value={fields.description}
        onChange={onChange}
        label="Descripción"
        containerClassName="my-3"
      />
      <Input
        name="imageUrl"
        value={fields.imageUrl}
        onChange={onChange}
        label="URL de Imagen"
        containerClassName="my-3"
      />
      <Button className="w-full mt-12" label="Agregar Destino" />
    </form>
  );
}
