import {
    cancelOrder,
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

import { router } from "../client";
import { protectProcedure } from "../procedure";

export const orderRouter = router({
    all: protectProcedure
        // .input()
        .query(async () => {
            return await fetchOrders({});
        }),

    find: protectProcedure
        .input(orderIdSchema)
        .query(async () => {
            return await fetchOrder({});
        }),

    history: protectProcedure
        // .input()
        .query(async () => {}),

    create: protectProcedure
        .input(createOrderParams)
        .mutation(async () => {
            return await createOrder({});
        }),

    update: protectProcedure
        .input(updateOrderParams)
        .mutation(async () => {
            return await updateOrder({});
        }),

    cancel: protectProcedure
        // .input()
        .mutation(async () => {
            return await cancelOrder({});
        }),

    delete: protectProcedure
        .input(orderIdSchema)
        .mutation(async () => {
            return await deleteOrder({});
        }),
});
