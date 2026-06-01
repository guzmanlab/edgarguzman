import { serve } from "@hono/node-server";
import { Hono } from "hono";

export const one = new Hono();

one.get("/", (c) => {
  return c.json({
    message: "you are on edgar guzman api version one",
  });
});

serve(
  {
    fetch: one.fetch,
    port: 3008,
  },
  (info) => {
    console.log(
      `version one is rocketing to the local cloud, http://localhost:${info.port}/`,
    );
  },
);
