import * as z from "zod";
import { TouristicDestinationSchema } from "./schemas/touristic-places.schema";
import { APIEntity } from "./base.types";

export type TouristicDestinationInput = z.infer<
  typeof TouristicDestinationSchema
>;

export type TouristicDestination = TouristicDestinationInput & APIEntity;
