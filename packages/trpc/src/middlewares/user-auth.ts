import { TRPCError } from "@trpc/server";

import { middleware } from "@rpc/client";

export const userAuthMiddleware = middleware(async ({ ctx, next }) => {
  if (!ctx.session?.user)
    throw new TRPCError({
      code: "UNAUTHORIZED",
    });

  return next({
    ctx: {
      session: {
        ...ctx.session,
        user: ctx.session.user,
      },
    },
  });
});
