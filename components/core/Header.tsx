"use client";

import Image from "next/image";
import Button from "./Button";

export default function Header() {
  return (
    <div className="py-4 px-4 flex justify-between items-center">
      <Image
        src="/images/logo.png"
        alt="logo El Salvador"
        width={502}
        height={81}
      />

      <Button
        label="Agregar destino"
        onClick={() => alert("hola")}
        className="px-16"
      />
    </div>
  );
}
