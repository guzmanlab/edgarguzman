import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";

import type { AppRouter } from "@rpc/routers/app";

export { rpc } from "@rpc/client";
export { createContext } from "@rpc/create-context";
export type { TRPCContext } from "@rpc/create-context";
export { appRouter } from "@rpc/routers/app";
export type { AppRouter } from "@rpc/routers/app";

// TODO: add a JSDoc comment on what this export type does
export type RouterInputs = inferRouterInputs<AppRouter>;

// TODO: add a JSDoc comment on what this export type does
export type RouterOutputs = inferRouterOutputs<AppRouter>;
