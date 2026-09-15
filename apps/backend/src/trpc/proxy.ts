import type { AppRouter } from "@edgarguzman/trpc";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";

export const trpc = createTRPCProxyClient<AppRouter>({
    links: [
        httpBatchLink({
            url: `${fetchBaseUrl()}/api/trpc`,
        }),
    ],
});

function fetchBaseUrl() {
    return "http://localhost:3002";
}
