// # Config for All with the following `.config.*` including `.eslintrc.js`

import { router } from '../trpc';
import { authRouter } from './auth';
import { exampleRouter } from './example';

export const appRouter = router({
    example: exampleRouter,
    auth: authRouter
});

export type AppRouter = typeof appRouter;
