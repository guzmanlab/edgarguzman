import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";

import type { AppRouter } from "./routers/app";

export { rpc } from "./client";
export { createContext } from "./create-context";
export type { TRPCContext } from "./create-context";
export { appRouter } from "./routers/app";
export type { AppRouter } from "./routers/app";

// TODO: add a JSDoc comment on what this export type does
export type RouterInputs = inferRouterInputs<AppRouter>;

// TODO: add a JSDoc comment on what this export type does
export type RouterOutputs = inferRouterOutputs<AppRouter>;
