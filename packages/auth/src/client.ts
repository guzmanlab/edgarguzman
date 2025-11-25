import { createAuthClient } from "better-auth/react";

export function createBetterAuthClient() {
  return createAuthClient();
}

export type SignIn = ReturnType<typeof createBetterAuthClient>["signIn"];
