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
  emailAndPassword: {
    enabled: true,
  },
  secret: process.env.BETTER_AUTH_SECRET,
  trustOrigins:
    process.env.NODE_ENV === "production"
      ? [
          process.env.STATIC_APP_URL,
          process.env.FRONTEND_APP_URL,
          process.env.BACKEND_APP_URL,
          process.env.API_VERSION_ONE_APP_URL,
        ].filter((url): url is string => Boolean(url))
      : [
          "http://localhost:3000",
          "http://localhost:3001",
          "http://localhost:3002",
          "http://localhost:3008",
        ],
});

export type Auth = ReturnType<typeof betterAuth>;

export type Session = Auth["$Infer"]["Session"];
