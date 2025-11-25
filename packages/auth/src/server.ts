import { drizzle } from "@edgarguzman/drizzle/client";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

export const auth = betterAuth({
  database: drizzleAdapter(drizzle, {
    provider: "pg",
  }),
  pages: {
    signIn: "/auth/sign-in",
  },
  trustOrigins:
    process.env.NODE_ENV === "production"
      ? [
          // TODO: add a process env when there a app that require auth package
          process.env.APP_ZERO_URL,
        ].filter((url): url is string => Boolean(url))
      : [
          // TODO: add a string instead of process env when there a app that require auth package
          "http://localhost:3000",
        ],
});

export type Auth = ReturnType<typeof betterAuth>;

export type Session = Auth["$Infer"]["Session"];
