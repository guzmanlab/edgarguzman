import type { fetchCountries } from "@edgarguzman/drizzle/queries/country";
import { country } from "@edgarguzman/drizzle/schema/country";
import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-zod";
import { z } from "zod";

import { timestamp } from "@lib/time-stamp";

const baseSchema = createSelectSchema(country).omit(timestamp);

export const createCountrySchema = createInsertSchema(country).omit(timestamp);

export const createCountryParams = baseSchema.extend({}).omit({
  id: true,
  userId: true,
});

export const updateCountrySchema = createUpdateSchema(country).omit(timestamp);

export const updateCountryParams = baseSchema.extend({}).omit({
  userId: true,
});

export const countryIdSchema = baseSchema.pick({
  id: true,
});

export type Country = typeof country.$inferSelect;

export type CreateCountry = z.infer<typeof createCountrySchema>;

export type CreateCountryParams = z.infer<typeof createCountryParams>;

export type UpdateCountry = z.infer<typeof updateCountrySchema>;

export type UpdateCountryParams = z.infer<typeof updateCountryParams>;

export type CountryId = z.infer<typeof countryIdSchema>["id"];

export type CompleteCountry = Awaited<
  ReturnType<typeof fetchCountries>
>["country"][number];
