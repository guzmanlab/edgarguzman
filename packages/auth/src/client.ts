import { createAuthClient } from "better-auth/react";

export const auth = createAuthClient();

export function createBetterAuthClient() {
  return createAuthClient();
}

export type SignIn = ReturnType<typeof createBetterAuthClient>["signIn"];
