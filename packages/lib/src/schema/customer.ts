import type { fetchCustomers } from "@edgarguzman/drizzle/queries/customer";
import { customer } from "@edgarguzman/drizzle/schema/customer";
import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-zod";
import { z } from "zod";

// import { timestamp } from "../time-stamp";

const baseSchema = createSelectSchema(customer);

export const createCustomerSchema = createInsertSchema(customer);

export const createCustomerParams = baseSchema.extend({}).omit({
  id: true,
  userId: true,
});

export const updateCustomerSchema = createUpdateSchema(customer);

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
>[][number];
