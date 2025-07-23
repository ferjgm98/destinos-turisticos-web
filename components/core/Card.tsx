"use client";

import { PropsWithChildren } from "react";

export default function Card({ children }: PropsWithChildren) {
  return (
    <div className="bg-white m-12 p-10 flex flex-col items-center h-[60vh] rounded shadow">
      {children}
    </div>
  );
}
