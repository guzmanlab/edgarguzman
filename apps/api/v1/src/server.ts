import { appRouter, createContext } from "@edgarguzman/trpc";
import { serve } from "@hono/node-server";
import { trpcServer } from "@hono/trpc-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { secureHeaders } from "hono/secure-headers";

const one = new Hono();

one.use(
    secureHeaders({
        crossOriginResourcePolicy: "cross-origin",
    })
);

one.use("*",
    cors({
        origin: process.env.ALLOWED_URL_ORIGINS?.split(",") ?? [],
        allowMethods: [
            "GET",
            "POST",
            "PUT",
            "DELETE",
            "OPTIONS",
            "PATCH",
        ],
        allowHeaders: [
            "Authorization",
            "Content-Type",
            "cf-ray",
            "trpc-accept",
        ],
        exposeHeaders: [
            "Content-Length",
            "Content-Type",
            "Cross-Origin-Resource-Policy",
        ],
        maxAge: 86400,
    })
);

one.use(
    "/trpc/*",
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
    port: 3011,
  },
  (info) => {
    console.log(
      `version one is rocketing to the local cloud, http://localhost:${info.port}/`,
    );
  },
);
