import { auth } from "@edgarguzman/auth/server";
import { drizzle } from "@edgarguzman/drizzle/client";

interface CreateContextOptions {
  headers: Headers;
}

export async function createContext(opts: CreateContextOptions) {
  let session = await auth.api.getSession({
    headers: opts.headers,
  });

  return {
    auth,
    session: session ?? null,
    drizzle,
  };
}

export type TRPCContext = Awaited<ReturnType<typeof createContext>>;
