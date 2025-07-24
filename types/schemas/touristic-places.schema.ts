import * as z from "zod";

const REQUIRED_MESSAGE = "Este campo es requerido";
const MAX_LENGTH_MESSAGE = "Máximo 255 caracteres";
const URL_MESSAGE = "Ingresa una URL valida";

export const TouristicDestinationSchema = z.object({
  name: z
    .string(REQUIRED_MESSAGE)
    .min(1, REQUIRED_MESSAGE)
    .max(255, "Máximo 255 caracteres"),
  address: z
    .string(REQUIRED_MESSAGE)
    .min(1, REQUIRED_MESSAGE)
    .max(255, "Máximo 255 caracteres"),
  description: z.string(REQUIRED_MESSAGE).min(1, REQUIRED_MESSAGE),
  imageUrl: z.url(URL_MESSAGE),
});
