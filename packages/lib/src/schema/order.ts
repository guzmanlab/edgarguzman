import type { fetchOrders } from "@edgarguzman/drizzle/queries/order";
import { order } from "@edgarguzman/drizzle/schema/order";
import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-zod";
import { z } from "zod";

import { timestamp } from "@lib/time-stamp";

const baseSchema = createSelectSchema(order).omit(timestamp);

export const createOrderSchema = createInsertSchema(order).omit(timestamp);

export const createOrderParams = baseSchema
  .extend({
    status: z
      .enum(["Created", "NotPaid", "Processing", "Failed", "Paid"])
      .default("Created")
      .nullish(),
  })
  .pick({
    id: true,
    userId: true,
  });

export const updateOrderSchema = createUpdateSchema(order).omit(timestamp);

export const updateOrderParams = baseSchema
  .extend({
    status: z
      .enum(["Created", "NotPaid", "Processing", "Failed", "Paid"])
      .default("Created")
      .nullish(),
  })
  .omit({
    userId: true,
  });

export const orderIdSchema = baseSchema.pick({
  id: true,
});

export type Order = typeof order.$inferSelect;

export type CreateOrder = z.infer<typeof createOrderSchema>;

export type CreateOrderParams = z.infer<typeof createOrderParams>;

export type UpdateOrder = z.infer<typeof updateOrderSchema>;

export type UpdateOrderParams = z.infer<typeof updateOrderParams>;

export type OrderId = z.infer<typeof orderIdSchema>["id"];

export type CompleteOrder = Awaited<
  ReturnType<typeof fetchOrders>
>["orders"][number];
