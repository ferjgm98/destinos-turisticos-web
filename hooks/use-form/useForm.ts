"use client";
import {
  DOMAttributes,
  FocusEventHandler,
  InputHTMLAttributes,
  useState,
} from "react";
import { UseFormProps } from "./use-form.types";
import * as z from "zod";

/**
 * useForm hook handles complex in a reusable way, it comes with:
 * - State management
 * - Validation schema
 * - customizable for each form
 *
 * @Param initialValue - initial values provided to the form state
 * @Param handleSubmit - action to be performed when submit the form
 * @Param validatorSchema? - Zod validator schema to handle form validation
 * 
 * @Return Object{
 *  fields: Object,
    onSubmit: function,
    onChange: function,
    onBlur: function,
    onFocus: function,
    errors: object,
    isValid: bool
  }
 */
export function useForm<T = Record<string, string>>({
  initialValues,
  handleSubmit,
  validatorSchema,
}: UseFormProps<T>) {
  const [form, setForm] = useState<T>(initialValues);
  const [errors, setErrors] = useState<{ [key in keyof T]?: string | null }>();
  const [touched, setTouched] = useState<{ [key in keyof T]?: boolean }>({});

  // Check form errors, it uses Zod parse function [https://zod.dev/basics?id=handling-errors]
  // In order to display the right message hook is aware of which fields have been touched by the user
  // Validator can be checked by
  // 1. By default will check by items already touched
  // 2. Check all means it will check all fields
  // 3. if field is provided it will only check on that field
  const checkErrors = (props?: {
    onSuccess?: () => void;
    checkAll?: boolean;
    field?: keyof T;
  }) => {
    const { onSuccess, checkAll = false, field = undefined } = props || {};
    try {
      if (!validatorSchema) return;
      validatorSchema?.parse(form);
      setErrors({});
      onSuccess?.();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const foundErrors = checkAll
          ? error.issues
          : error.issues?.filter((issue) =>
              field
                ? field === issue.path[0]
                : touched[issue.path[0] as keyof typeof touched]
            );

        setErrors(
          foundErrors.reduce(
            (acc, err) => ({ ...acc, [err.path[0]]: err.message }),
            {}
          )
        );
        return;
      }
    }
  };

  const handleChange: InputHTMLAttributes<
    HTMLInputElement | HTMLTextAreaElement
  >["onChange"] = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));

    // Workaround to fix weird sync bug. Maybe can be fixed by having a useReduced for a
    // centralized state
    if (value.length === 1) return;

    checkErrors({
      field: name as keyof T,
    });
  };

  const handleFocus: FocusEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    checkErrors();
  };

  const handleBlur: FocusEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = () => {
    checkErrors();
  };

  const onSubmit: DOMAttributes<HTMLFormElement>["onSubmit"] = (e) => {
    e.preventDefault();

    checkErrors({
      onSuccess: () => {
        handleSubmit?.(form);
        setTouched({});
      },
      checkAll: true,
    });
  };

  return {
    fields: form,
    onSubmit,
    onChange: handleChange,
    onBlur: handleBlur,
    onFocus: handleFocus,
    errors,
    isValid: !errors,
  };
}
