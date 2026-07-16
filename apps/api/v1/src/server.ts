import { appRouter, createContext } from "@edgarguzman/trpc";
import { serve } from "@hono/node-server";
import { trpcServer } from "@hono/trpc-server";
import { Hono } from "hono";

const one = new Hono();

one.use(
    '/trpc',
    trpcServer({
        router: appRouter,
        async createContext(c) {
            return await createContext({
                headers: c.req.headers
            });
        }
    })
);

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
