import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { proxy } from "hono/proxy";

const app = new Hono().basePath("/api");

app.get("/", (c) => {
  return c.json({
    message: "welcome to the edgar guzman api",
  });
});

app.get("/v1", async () => {
  return await proxy("http://localhost:3008/");
});

app.get("/v1/:path", async (c) => {
  return await proxy(`http://localhost:3008/${c.req.param("path")}`);
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
