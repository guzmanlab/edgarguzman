import type { fetchAddresses } from "@edgarguzman/drizzle/queries/address";
import { address } from "@edgarguzman/drizzle/schema/address";
import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-zod";
import { z } from "zod";

import { timestamp } from "@lib/time-stamp";

const baseSchema = createSelectSchema(address).omit(timestamp);

export const createAddressSchema = createInsertSchema(address).omit(timestamp);

export const createAddressParams = baseSchema
  .extend({
    defaulted: z.coerce.boolean(),
  })
  .omit({
    id: true,
    userId: true,
  });

export const updateAddressSchema = createUpdateSchema(address).omit(timestamp);

export const updateAddressParams = baseSchema
  .extend({
    defaulted: z.coerce.boolean(),
  })
  .omit({
    userId: true,
  });

export const addressIdSchema = baseSchema.pick({
  id: true,
});

export type Address = typeof address.$inferSelect;

export type CreateAddress = z.infer<typeof createAddressSchema>;

export type CreateAddressParams = z.infer<typeof createAddressParams>;

export type UpdateAddress = z.infer<typeof updateAddressSchema>;

export type UpdateAddressParams = z.infer<typeof updateAddressParams>;

export type AddressId = z.infer<typeof addressIdSchema>["id"];

export type CompleteAddress = Awaited<
  ReturnType<typeof fetchAddresses>
>["addresses"][number];
