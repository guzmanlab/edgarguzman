import { fetchCurrentUser } from "@edgarguzman/drizzle/queries/user";
import { user } from "@edgarguzman/drizzle/schema/user";
import {
  createUserParams,
  updateUserParams,
  userIdSchema,
} from "@edgarguzman/lib/schema/user";
import { desc, eq } from "drizzle-orm";

import { router } from "@rpc/client";
import { protectProcedure, publicProcedure } from "@rpc/procedure";

export const userRouter = router({
  all: publicProcedure.query(async ({ ctx }) => {
    // TODO: add findUserOrderByDesc() function in drizzle queries folder under the user file

    return await ctx.drizzle.select().from(user).orderBy(desc(user.createdAt));
  }),

  checkAuthCurrentUser: publicProcedure.query(async () => {
    return await fetchCurrentUser();
  }),

  find: publicProcedure.input(userIdSchema).query(async ({ ctx, input }) => {
    // TODO: add findUser() function in drizzle queries folder under the user file

    return await ctx.drizzle.select().from(user).where(eq(user.id, input.id));
  }),

  create: publicProcedure
    .input(createUserParams)
    .mutation(async ({ ctx, input }) => {
      // TODO: add createUser() function in drizzle queries folder under the user file

      let [result] = await ctx.drizzle
        .insert(user)
        .values({
          name: input.name,
          email: input.email,
          emailVerified: input.emailVerified,
          password: input.password,
          image: input.image,
          role: "User",
        })
        .returning();

      return result;
    }),

  update: protectProcedure
    .input(updateUserParams)
    .mutation(async ({ ctx, input }) => {
      // TOOD: add the updateUser function inside of drizzle queries folder under the user file

      let [result] = await ctx.drizzle
        .update(user)
        .set({})
        .where(eq(user.id, input.id))
        .returning();

      return result;
    }),

  delete: protectProcedure
    .input(userIdSchema)
    .mutation(async ({ ctx, input }) => {
      // TOOD: add the deleteUser function inside of drizzle queries folder under the user file

      let [deleted] = await ctx.drizzle
        .delete(user)
        .where(eq(user.id, input.id))
        .returning();

      return deleted;
    }),
});
