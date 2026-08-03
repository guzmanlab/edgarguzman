import { TRPCError } from "@trpc/server";
import { eq } from "drizzle-orm";

import { roleEnum, user } from "../../../drizzle/src/schema/user";
import { middleware } from "../client";

export const adminAuthMiddleware = middleware(async ({ ctx, next }) => {
    if (!ctx.session?.user)
        throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "not authenticated, only administrator can access this level of procedure protocol",
        });

    let [currentUser] = await ctx.drizzle
        .select({
            role: user.role
        })
        .from(user)
        .where(eq(user.id, ctx.session.user.id))
        .limit(1);

    if (currentUser?.role !== roleEnum.enumValues[1])
        throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "not authenticated, only administrator can access this level of procedure protocol",
        });

    return next({
        ctx
    });
});
