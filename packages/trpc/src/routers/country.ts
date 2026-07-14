import {
    createCountry,
    deleteCountry,
    fetchCountries,
    fetchCountry,
    updateCountry,
} from "@edgarguzman/drizzle/queries/country";
import {
    countryIdSchema,
    createCountryParams,
    updateCountryParams,
} from "@edgarguzman/lib/schema/country";

import { router } from "../client";
import { protectProcedure, publicProcedure } from "../procedure";

export const countryRouter = router({
    all: publicProcedure
        .input(countryIdSchema)
        .query(async () => {
            return await fetchCountries({});
        }),

    find: publicProcedure
        .input(countryIdSchema)
        .query(async () => {
            return await fetchCountry({});
        }),

    create: protectProcedure
        .input(createCountryParams)
        .mutation(async () => {
            return await createCountry({});
        }),

    update: protectProcedure
        .input(updateCountryParams)
        .mutation(async () => {
            return await updateCountry({});
        }),

    delete: protectProcedure
        .input(countryIdSchema)
        .mutation(async () => {
            return await deleteCountry({});
        }),
});
