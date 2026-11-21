import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";

import type { AppRouter } from "@edgarguzman/trpc";

export const trpc = createTRPCProxyClient<AppRouter>({
    links: [
        httpBatchLink({
            url: `${fetchBaseUrl()}/trpc`
        })
    ]
});

function fetchBaseUrl(): string {
    if (typeof window !== "undefined") return window.location.origin;

    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;

    return `http://localhost:${process.env.PORT ?? 3011}`;
}
