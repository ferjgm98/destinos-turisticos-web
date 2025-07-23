import { z } from "zod/mini";

export type UseFormProps<T = Record<string, string>> = {
  initialValues: T;
  handleSubmit?: (data: T) => void;
  validatorSchema?: z.ZodMiniObject;
};
