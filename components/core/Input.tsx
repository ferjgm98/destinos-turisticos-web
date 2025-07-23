"use client";

import { FocusEventHandler, InputHTMLAttributes } from "react";

export type InputProps = {
  name: string;
  label?: string;
  value?: string;
  type?: string;
  onChange?: InputHTMLAttributes<HTMLInputElement>["onChange"];
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  className?: undefined | string;
  containerClassName?: undefined | string;
  error?: string | undefined | null;
};

export default function Input({
  name,
  label,
  type = "text",
  value,
  onChange,
  onBlur,
  onFocus,
  className = "",
  containerClassName = "",
  error = undefined,
}: InputProps) {
  return (
    <label className={`flex flex-col ${containerClassName}`} htmlFor={name}>
      <span className="mb-2">{label ? label : ""}</span>
      <input
        id={name}
        name={name}
        className={`bg-td-base border border-transparent rounded-md px-3 py-2 ${className} ${
          error ? "border-red-600" : ""
        }`}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      {error ? <p className="text-xs my-1 text-red-600">{error}</p> : null}
    </label>
  );
}
