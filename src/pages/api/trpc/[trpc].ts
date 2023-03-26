// @pages/api/trpc/[trpc].ts
import { createNextApiHandler } from '@trpc/server/adapters/next';

import { env } from '@env/server.mjs';
import { createContext } from '@server/trpc/context';
import { appRouter } from '@server/trpc/router/_app';

const t = createNextApiHandler({
    router: appRouter,
    createContext,
    onError:
        env.NODE_ENV === 'development'
            ? ({ path, error }) => {
                  console.error(`❌ tRPC failed on ${path}: ${error}`);
              }
            : undefined
});

export default t;
