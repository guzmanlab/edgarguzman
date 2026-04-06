import { procedure } from "./client";
import { adminAuthMiddleware } from "./middlewares/admin-auth";
import { userAuthMiddleware } from "./middlewares/user-auth";

export const publicProcedure = procedure;

export const protectProcedure = procedure.use(userAuthMiddleware);

export const adminProcedure = procedure
  .use(userAuthMiddleware)
  .use(adminAuthMiddleware);
