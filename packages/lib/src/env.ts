// TODO: add a proper env function like - createEnv

import { z } from "zod";

export const variables = z.object({
  NODE_ENV: z.string().default("development"),
  DATABASE_URL: z
    .enum(["development", "test", "production"])
    .default("development"),
  // PORT: z.number().min(300).default(3000),
  // AUTH_SECRET:
  //   process.env.NODE_ENV === "production"
  //     ? z.string()
  //     : z.string().optional(),
});
// .parse(process.env);

variables.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof variables> {}
  }
}

export const env = variables;
