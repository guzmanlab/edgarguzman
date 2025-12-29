import {
  createCountry,
  deleteCountry,
  fetchCountry,
  updateCountry,
} from "@edgarguzman/drizzle/queries/country";
import { fetchCustomers } from "@edgarguzman/drizzle/queries/customer";
import {
  countryIdSchema,
  createCountryParams,
  updateCountryParams,
} from "@edgarguzman/lib/schema/country";

import { router } from "@rpc/client";
import { protectProcedure, publicProcedure } from "@rpc/procedure";

export const countryRouter = router({
  all: publicProcedure
    // .input(countryIdSchema)
    .mutation(async ({ ctx, input }) => {
      return await fetchCustomers({
        // id: input.id,
        // userId: ctx.session?.user?.id
      });
    }),

  find: publicProcedure.input(countryIdSchema).query(async ({ ctx, input }) => {
    return await fetchCountry({
      id: input.id,
    });
  }),

  create: protectProcedure
    .input(createCountryParams)
    .mutation(async ({ ctx, input }) => {
      return await createCountry({
        userId: ctx.session?.user?.id,
        title: input.title,
        key: input.key,
      });
    }),

  update: protectProcedure
    .input(updateCountryParams)
    .mutation(async ({ ctx, input }) => {
      return await updateCountry({
        id: input.id,
        userId: ctx.session?.user?.id,
        title: input.title,
        key: input.key,
      });
    }),

  delete: protectProcedure
    .input(countryIdSchema)
    .mutation(async ({ ctx, input }) => {
      return await deleteCountry({
        id: input.id,
        userId: ctx.session?.user?.id,
      });
    }),
});
