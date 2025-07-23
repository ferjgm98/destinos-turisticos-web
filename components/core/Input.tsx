"use client";

import { InputHTMLAttributes } from "react";

export type InputProps = {
  name: string;
  label?: string;
  value?: string;
  type?: string;
  onChange?: InputHTMLAttributes<HTMLInputElement>["onChange"];
  className?: undefined | string;
  containerClassName?: undefined | string;
};

export default function Input({
  name,
  label,
  type = "text",
  value,
  onChange,
  className = "",
  containerClassName = "",
}: InputProps) {
  return (
    <label className={`flex flex-col ${containerClassName}`} htmlFor={name}>
      <span className="mb-2">{label ? label : ""}</span>
      <input
        id={name}
        name={name}
        className={`bg-td-base rounded-md px-3 py-2 ${className}`}
        type={type}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
