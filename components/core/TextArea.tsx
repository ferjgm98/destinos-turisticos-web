"use client";

import { FocusEventHandler, InputHTMLAttributes } from "react";

export type TextAreaProps = {
  name: string;
  label?: string;
  value?: string;
  type?: string;
  onChange?: InputHTMLAttributes<HTMLTextAreaElement>["onChange"];
  onBlur?: FocusEventHandler<HTMLTextAreaElement>;
  onFocus?: FocusEventHandler<HTMLTextAreaElement>;
  className?: undefined | string;
  containerClassName?: undefined | string;
  error?: string | undefined | null;
};

export default function TextArea({
  name,
  label,
  type = "text",
  value,
  onChange,
  onBlur,
  onFocus,
  className = "",
  containerClassName = "",
  error,
}: TextAreaProps) {
  return (
    <label className={`flex flex-col ${containerClassName}`} htmlFor={name}>
      <span className="mb-2">{label ? label : ""}</span>
      <textarea
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className={`bg-td-base border border-transparent rounded-md px-3 py-2 ${className} ${
          error ? "border-red-600" : ""
        }`}
      ></textarea>
      {error ? <p className="text-xs my-1 text-red-600">{error}</p> : null}
    </label>
  );
}
