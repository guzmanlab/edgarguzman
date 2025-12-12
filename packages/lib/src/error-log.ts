import { z } from "zod";

export function error(error: any, word?: string): void {
  if (error instanceof z.ZodError) console.error(word);
}

export function isZodError(err: unknown): err is z.ZodError {
  return Boolean(
    err &&
      (err instanceof z.ZodError || (err as z.ZodError).name === "z.ZodError"),
  );
}
