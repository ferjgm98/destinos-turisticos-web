"use client";

import Image from "next/image";
import Button from "./Button";
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const buttonProps = useMemo(() => {
    if (pathname === "/") {
      return {
        label: "Agregar destino",
        onClick: () => router.push("/agregar-destino"),
      };
    }

    return {
      label: "Listado de destinos",
      onClick: () => router.push("/"),
    };
  }, [pathname]);

  return (
    <div className="py-4 px-4 flex justify-between items-center">
      <Image
        src="/images/logo.png"
        alt="logo El Salvador"
        width={402}
        height={81}
      />

      <Button {...buttonProps} className="px-16 cursor-pointer" />
    </div>
  );
}
