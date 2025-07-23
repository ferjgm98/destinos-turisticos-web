export type UseFormProps<T> = {
  initialValues: T;
  handleSubmit?: (data: T) => void;
};
