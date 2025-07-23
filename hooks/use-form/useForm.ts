import { DOMAttributes, useState } from "react";
import { UseFormProps } from "./use-form.types";
import { InputProps } from "@/components/core/Input";

export function useForm<T = Record<string, string>>({
  initialValues,
  handleSubmit,
}: UseFormProps<T>) {
  const [form, setForm] = useState<T>(initialValues);

  const handleChange: InputProps["onChange"] = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit: DOMAttributes<HTMLFormElement>["onSubmit"] = (e) => {
    e.preventDefault();

    handleSubmit?.(form);
  };

  return {
    fields: form,
    onSubmit,
    onChange: handleChange,
  };
}
