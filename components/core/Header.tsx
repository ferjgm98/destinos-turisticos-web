"use client";

import Image from "next/image";
import Button from "./Button";
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const buttonProps = useMemo(() => {
    if (pathname === "/") {
      return {
        label: "Agregar destino",
        onClick: () => router.push("/destino-turistico/agregar"),
      };
    }

    return {
      label: "Listado de destinos",
      onClick: () => router.push("/"),
    };
  }, [pathname]);

  return (
    <div className="pt-4 pb-1 px-4 flex justify-between items-center">
      <Link href="/">
        <Image
          src="/images/logo.png"
          alt="logo El Salvador"
          width={402}
          height={81}
        />
      </Link>

      <Button {...buttonProps} className="px-16 mb-2 cursor-pointer" />
    </div>
  );
}
