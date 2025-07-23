"use client";
import { useState } from "react";
import Input from "../core/Input";
import Button from "../core/Button";

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
    <form onSubmit={handleSubmit}>
      <Input
        name="name"
        value={form.name}
        onChange={handleChange}
        label="Nombre"
      />
      <Input
        name="address"
        value={form.address}
        onChange={handleChange}
        label="Direccion"
      />
      <Input
        name="imageUrl"
        value={form.imageUrl}
        onChange={handleChange}
        label="URL de Imagen"
      />
      <Button label="Agregar Destino" />
    </form>
  );
}
