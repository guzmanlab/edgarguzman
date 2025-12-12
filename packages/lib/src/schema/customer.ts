import { fetchCustomers } from "@edgarguzman/drizzle/queries/customer";
import { customer } from "@edgarguzman/drizzle/schema/customer";
import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-zod";
import { z } from "zod";

import { timestamp } from "@lib/time-stamp";

const baseSchema = createSelectSchema(customer).omit(timestamp);

export const createCustomerSchema =
  createInsertSchema(customer).omit(timestamp);

export const createCustomerParams = baseSchema.extend({}).omit({
  id: true,
  userId: true,
});

export const updateCustomerSchema =
  createUpdateSchema(customer).omit(timestamp);

export const updateCustomerParams = baseSchema.extend({}).omit({
  userId: true,
});

export const customerIdSchema = baseSchema.pick({
  id: true,
});

export type Customer = typeof customer.$inferSelect;

export type CreateCustomer = typeof createCustomerSchema;

export type CreateCustomerParams = z.infer<typeof createCustomerParams>;

export type UpdateCustomer = z.infer<typeof updateCustomerSchema>;

export type UpdateCustomerParams = z.infer<typeof updateCustomerParams>;

export type CustomerId = z.infer<typeof customerIdSchema>["id"];

export type CompleteCountry = Awaited<
  ReturnType<typeof fetchCustomers>
>["customers"][number];
