import {
  createUser,
  deleteUser,
  fetchCurrentUser,
  fetchUsers,
  findUser,
  updateUser,
} from "@edgarguzman/drizzle/queries/user";
import { z } from "zod";

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
    .input(
      z.object({})
    )
    .query(async () => {
      return await findUser({});
    }),

  create: publicProcedure
    .input(
      z.object({})
    )
    .mutation(async () => {
      return await createUser({});
    }),

  update: protectProcedure
    .input(
      z.object({})
    )
    .mutation(async () => {
      return await updateUser({});
    }),

  delete: protectProcedure
    .input(
      z.object({})
    )
    .mutation(async () => {
      return await deleteUser({});
    }),
});
