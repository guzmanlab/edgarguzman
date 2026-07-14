import {
  createCustomer,
  deleteCustomer,
  fetchCustomer,
  fetchCustomers,
  updateCustomer,
} from "@edgarguzman/drizzle/queries/customer";
import {
  createCustomerParams,
  customerIdSchema,
  updateCustomerParams,
} from "@edgarguzman/lib/schema/customer";

import { router } from "../client";
import { protectProcedure, publicProcedure } from "../procedure";

export const customerRouter = router({
  all: publicProcedure
    .input(customerIdSchema)
    .query(async () => {
        return await fetchCustomers({});
    }),

  find: publicProcedure
    .input(customerIdSchema)
    .query(async () => {
        return await fetchCustomer({});
    }),

  create: protectProcedure
    .input(createCustomerParams)
    .mutation(async () => {
      return await createCustomer({});
    }),

  update: protectProcedure
    .input(updateCustomerParams)
    .mutation(async () => {
      return await updateCustomer({});
    }),

  delete: protectProcedure
    .input(customerIdSchema)
    .mutation(async () => {
      return await deleteCustomer({});
    }),
});
