import { createUser, deleteUser, fetchCurrentUser, fetchUsers, findUser, updateUser } from "@edgarguzman/drizzle/queries/user";
import {
    createUserParams,
    updateUserParams,
    userIdSchema,
} from "@edgarguzman/lib/schema/user";

import { router } from "../client";
import { protectProcedure, publicProcedure } from "../procedure";

export const userRouter = router({
  all: publicProcedure.query(async () => {
    return await fetchUsers({});
  }),

  checkAuthCurrentUser: publicProcedure.query(async () => {
    return await fetchCurrentUser();
  }),

  find: publicProcedure
    .input(userIdSchema)
    .query(async () => {
      return await findUser({});
    }),

  create: publicProcedure
    .input(createUserParams)
    .mutation(async () => {
      return await createUser({});
    }),

  update: protectProcedure
    .input(updateUserParams)
    .mutation(async () => {
      return await updateUser({});
    }),

  delete: protectProcedure
    .input(userIdSchema)
    .mutation(async () => {
      return await deleteUser({});
    }),
});
