import {
  cancelOrder,
  createOrder,
  deleteOrder,
  fetchOrder,
  fetchOrders,
  updateOrder,
} from "@edgarguzman/drizzle/queries/order";
import { z } from "zod";

import { router } from "../client";
import { protectProcedure } from "../procedure";

export const orderRouter = router({
  all: protectProcedure
    .input(
        z.object({})
    )
    .query(async () => {
        return await fetchOrders({});
    }),

  find: protectProcedure
    .input(
        z.object({})
    )
    .query(async () => {
        return await fetchOrder({});
    }),

  history: protectProcedure
    .input(
        z.object({})
    )
    .query(async () => {}),
r: protectProcedure
    .input(
        z.object({})
    )
    .mutation(async () => {
        return await createOrder({});
    }),

  update: protectProcedure
    .input(
        z.object({})
    )
    .mutation(async () => {
        return await updateOrder({});
    }),

  cancel: protectProcedure
    .input(
        z.object({})
    )
    .mutation(async () => {
        return await cancelOrder({});
    }),

  delete: protectProcedure
    .input(
        z.object({})
    )
    .mutation(async () => {
        return await deleteOrder({});
    }),
});
