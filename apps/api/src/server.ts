import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono().basePath("/api");

app.get("/", (c) => {
  return c.json({
    message: "welcome to the edgar guzman api",
  });
});

serve(
  {
    fetch: app.fetch,
    port: 3003,
  },
  (info) => {
    console.log(
      `server is rocketing to the local cloud, http://localhost:${info.port}/`,
    );
  },
);
