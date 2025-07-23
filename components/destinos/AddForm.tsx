"use client";
import { useState } from "react";
import Input from "../core/Input";
import Button from "../core/Button";
import TextArea from "../core/TextArea";

export default function AddForm() {
  const [form, setForm] = useState({
    name: "",
    address: "",
    description: "",
    imageUrl: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
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
        label="Direccion"
        containerClassName="my-3"
      />
      <TextArea
        name="description"
        value={form.description}
        onChange={handleChange}
        label="Description"
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
