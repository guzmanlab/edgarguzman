import {
  createOrder,
  deleteOrder,
  fetchOrder,
  fetchOrders,
  updateOrder,
} from "@edgarguzman/drizzle/queries/order";
import {
  createOrderParams,
  orderIdSchema,
  updateOrderParams,
} from "@edgarguzman/lib/schema/order";

import { router } from "@rpc/client";
import { protectProcedure } from "@rpc/procedure";

export const orderRouter = router({
  all: protectProcedure
    // .input()
    .mutation(async () => {
      return await fetchOrders({});
    }),

  find: protectProcedure.input(orderIdSchema).query(async ({ ctx, input }) => {
    return await fetchOrder({
      id: input.id,
      userId: ctx.session?.user?.id,
    });
  }),

  history: protectProcedure
    // .input()
    .mutation(async () => {}),

  create: protectProcedure
    .input(createOrderParams)
    .mutation(async ({ ctx }) => {
      return await createOrder({
        userId: ctx.session?.user?.id,
      });
    }),

  update: protectProcedure
    .input(updateOrderParams)
    .mutation(async ({ ctx, input }) => {
      return await updateOrder({
        id: input.id,
        userId: ctx.session?.user?.id,
      });
    }),

  cancel: protectProcedure
    // .input()
    .mutation(async () => {}),

  delete: protectProcedure
    .input(orderIdSchema)
    .mutation(async ({ ctx, input }) => {
      return await deleteOrder({
        id: input.id,
        userId: ctx.session?.user?.id,
      });
    }),
});
