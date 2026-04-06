import { TRPCError } from "@trpc/server";

import { middleware } from "../client";
import { userAuthMiddleware } from "../middlewares/user-auth";

export const adminAuthMiddleware = middleware(async () => {});
