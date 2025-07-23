"use client";
import { DOMAttributes, useState } from "react";
import Input, { InputProps } from "../core/Input";
import Button from "../core/Button";
import TextArea from "../core/TextArea";

export type DestinationItem = {
  name: string;
  address: string;
  description: string;
  imageUrl: string;
};

export default function AddDestinationForm() {
  const [form, setForm] = useState<DestinationItem>({
    name: "",
    address: "",
    description: "",
    imageUrl: "",
  });

  const handleChange: InputProps["onChange"] = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Use built-in DOM types to handle event types
  const handleSubmit: DOMAttributes<HTMLFormElement>["onSubmit"] = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="w-xl">
      <Input
        name="name"
        value={form.name}
        onChange={handleChange}
        label="Nombre"
        className="w-full"
        containerClassName="my-3"
      />
      <Input
        name="address"
        value={form.address}
        onChange={handleChange}
        label="Dirección"
        containerClassName="my-3"
      />
      <TextArea
        name="description"
        value={form.description}
        onChange={handleChange}
        label="Descripción"
        containerClassName="my-3"
      />
      <Input
        name="imageUrl"
        value={form.imageUrl}
        onChange={handleChange}
        label="URL de Imagen"
        containerClassName="my-3"
      />
      <Button className="w-full mt-12" label="Agregar Destino" />
    </form>
  );
}
