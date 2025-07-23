"use client";

export type InputProps = {
  name: string;
  label?: string;
  value?: string;
  type?: string;
  onChange?: (e: any) => void;
};

export default function Input({
  name,
  label,
  type = "text",
  value,
  onChange,
}: InputProps) {
  return (
    <label className="flex flex-col" htmlFor={name}>
      {label ? label : ""}
      <input
        id={name}
        name={name}
        className="bg-[#F3F3F3] rounded px-3 py-2"
        type={type}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
