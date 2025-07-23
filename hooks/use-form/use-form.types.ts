import { z } from "zod";

export type UseFormProps<T = Record<string, string>> = {
  initialValues: T;
  handleSubmit?: (data: T) => void;
  validatorSchema?: z.ZodObject;
};
