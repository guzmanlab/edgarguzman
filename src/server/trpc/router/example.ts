// # Config for All with the following `.config.*` including `.eslintrc.js`

import { z } from 'zod';

import { publicProcedure, router } from '../trpc';

export const exampleRouter = router({
    hello: publicProcedure
        .input(
            z
                .object({
                    text: z.string().nullish()
                })
                .nullish()
        )
        .query(({ input }: any) => {
            return {
                greeting: `Hello ${input?.text ?? 'world'}`
            };
        }),
    getAll: publicProcedure.query(({ ctx }: any) => {
        return ctx?.prisma.example.findMany();
    })
});
