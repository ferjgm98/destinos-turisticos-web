import * as z from "zod";

const REQUIRED_MESSAGE = "Este campo es requerido";
const URL_MESSAGE = "Ingresa una URL valida";

export const TouristicDestinationSchema = z.object({
  name: z.string(REQUIRED_MESSAGE).min(1, REQUIRED_MESSAGE),
  address: z.string(REQUIRED_MESSAGE).min(1, REQUIRED_MESSAGE),
  description: z.string(REQUIRED_MESSAGE).min(1, REQUIRED_MESSAGE),
  imageUrl: z.url(URL_MESSAGE),
});
