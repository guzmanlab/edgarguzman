import { procedure } from "@rpc/client";
import { adminAuthMiddleware } from "@rpc/middlewares/admin-auth";
import { userAuthMiddleware } from "@rpc/middlewares/user-auth";

export const publicProcedure = procedure;

export const protectProcedure = procedure.use(userAuthMiddleware);

export const adminProcedure = procedure
  .use(userAuthMiddleware)
  .use(adminAuthMiddleware);
