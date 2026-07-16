import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";

import type { AppRouter } from "@edgarguzman/trpc";

export const trpc = createTRPCProxyClient<AppRouter>({
    links: [
        httpBatchLink({
            url: `${fetchBaseUrl()}/trpc`
        })
    ]
});

function fetchBaseUrl() {
    return `http://localhost:3008`;
}
