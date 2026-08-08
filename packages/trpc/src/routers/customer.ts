import {
  createCustomer,
  deleteCustomer,
  fetchCustomer,
  fetchCustomers,
  updateCustomer,
} from "@edgarguzman/drizzle/queries/customer";
import { z } from "zod";

import { router } from "../client";
import { protectProcedure, publicProcedure } from "../procedure";

export const customerRouter = router({
  all: publicProcedure
    .input(
        z.object({})
    )
    .query(async () => {
        return await fetchCustomers({});
    }),

  find: publicProcedure
    .input(
        z.object({})
    )
    .query(async () => {
        return await fetchCustomer({});
    }),

  create: protectProcedure
    .input(
        z.object({})
    )
    .mutation(async () => {
      return await createCustomer({});
    }),

  update: protectProcedure
    .input(
        z.object({})
    )
    .mutation(async () => {
      return await updateCustomer({});
    }),

  delete: protectProcedure
    .input(
        z.object({})
    )
    .mutation(async () => {
      return await deleteCustomer({});
    }),
});
