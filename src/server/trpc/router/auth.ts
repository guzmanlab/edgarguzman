import { protectedProcedure, publicProcedure, router } from '../trpc';

export const authRouter = router({
    getSession: publicProcedure.query(({ ctx }: any) => {
        return ctx.session;
    }),
    getSecretMessage: protectedProcedure.query(() => {
        return 'you can now see this secret message!';
    })
});
