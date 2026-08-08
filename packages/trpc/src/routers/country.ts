import {
  createCountry,
  deleteCountry,
  fetchCountries,
  fetchCountry,
  updateCountry,
} from "@edgarguzman/drizzle/queries/country";
import { z } from "zod";

import { router } from "../client";
import { protectProcedure, publicProcedure } from "../procedure";

export const countryRouter = router({
  all: publicProcedure
    .input(
        z.object({})
    )
    .query(async () => {
        return await fetchCountries({});
    }),

  find: publicProcedure
    .input(
        z.object({})
    )
    .query(async () => {
        return await fetchCountry({});
    }),

  create: protectProcedure
    .input(
        z.object({})
    )
    .mutation(async () => {
        return await createCountry({});
    }),

  update: protectProcedure
    .input(
        z.object({})
    )
    .mutation(async () => {
        return await updateCountry({});
    }),

  delete: protectProcedure
    .input(
        z.object({})
    )
    .mutation(async () => {
        return await deleteCountry({});
    }),
});
