import type { fetchUsers } from "@edgarguzman/drizzle/queries/user";
import { user } from "@edgarguzman/drizzle/schema/user";
import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-zod";
import { z } from "zod";

import { timestamp } from "@lib/time-stamp";

const baseSchema = createSelectSchema(user).omit(timestamp);

export const createUserSchema = createInsertSchema(user).omit(timestamp);

export const createUserParams = baseSchema
  .extend({
    role: z.enum(["User", "Admin"]).default("User").nullish(),
  })
  .omit({
    id: true,
  });

export const updateUserSchema = createUpdateSchema(user).omit(timestamp);

export const updateUserParams = baseSchema.extend({
  role: z.enum(["User", "Admin"]).default("User").nullish(),
});

export const userIdSchema = baseSchema.pick({
  id: true,
});

export type User = typeof user.$inferSelect;

export type CreateUser = z.infer<typeof createUserSchema>;

export type CreateUserParams = z.infer<typeof createUserParams>;

export type UpdateUser = z.infer<typeof updateUserSchema>;

export type UpdateUserParams = z.infer<typeof updateUserParams>;

export type UserId = z.infer<typeof userIdSchema>;

export type CompleteUser = Awaited<
  ReturnType<typeof fetchUsers>
>["users"][number];
