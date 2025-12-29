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

import { router } from "@rpc/client";
import { protectProcedure, publicProcedure } from "@rpc/procedure";

export const customerRouter = router({
  all: publicProcedure.input(customerIdSchema).query(async ({ ctx, input }) => {
    return await fetchCustomers({
      id: input.id,
      userId: ctx.session?.user?.id ?? "",
    });
  }),

  find: publicProcedure.query(async ({ ctx }) => {
    return await fetchCustomer({
      userId: ctx.session?.user?.id ?? "",
    });
  }),

  create: protectProcedure
    .input(createCustomerParams)
    .mutation(async ({ ctx, input }) => {
      return await createCustomer({
        userId: ctx.session?.user?.id,
        name: input.name,
        email: input.email,
      });
    }),

  update: protectProcedure
    .input(updateCustomerParams)
    .mutation(async ({ ctx, input }) => {
      return await updateCustomer({
        id: input.id,
        userId: ctx.session?.user?.id,
        name: input.name,
        email: input.email,
      });
    }),

  delete: protectProcedure
    .input(customerIdSchema)
    .mutation(async ({ ctx, input }) => {
      return await deleteCustomer({
        id: input.id,
        userId: ctx.session?.user?.id,
      });
    }),
});
