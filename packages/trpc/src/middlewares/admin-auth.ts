import { TRPCError } from "@trpc/server";

import { middleware } from "@rpc/client";
import { timingMiddleware } from "@rpc/middlewares/timing";
import { userAuthMiddleware } from "@rpc/middlewares/user-auth";

export const adminAuthMiddleware = middleware(async () => {});
