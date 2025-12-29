import { initTRPC } from "@trpc/server";
import { SuperJSON } from "superjson";
import { z } from "zod";

import type { TRPCContext } from "@rpc/create-context";

export const rpc = initTRPC.context<TRPCContext>().create({
  transformer: SuperJSON,
  errorFormatter(opts) {
    return {
      ...opts.shape,
      data: {
        ...opts.shape.data,
        zodError:
          opts.error.code === "BAD_REQUEST" &&
          opts.error.cause instanceof z.ZodError
            ? opts.error.cause.flatten()
            : null,
      },
    };
  },
});

export const router = rpc.router;

export const mergeRouter = rpc.mergeRouters;

export const procedure = rpc.procedure;

export const middleware = rpc.middleware;
