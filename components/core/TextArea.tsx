"use client";

export type TextAreaProps = {
  name: string;
  label?: string;
  value?: string;
  type?: string;
  onChange?: (e: any) => void;
  className?: undefined | string;
  containerClassName?: undefined | string;
};

export default function TextArea({
  name,
  label,
  type = "text",
  value,
  onChange,
  className = "",
  containerClassName = "",
}: TextAreaProps) {
  return (
    <label className={`flex flex-col ${containerClassName}`} htmlFor={name}>
      <span className="mb-2">{label ? label : ""}</span>
      <textarea
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className={`bg-td-base rounded-md px-3 py-2 ${className}`}
      ></textarea>
    </label>
  );
}
