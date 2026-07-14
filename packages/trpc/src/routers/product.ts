import {
    createProduct,
    deleteProduct,
    fetchProduct,
    fetchProducts,
    searchProducts,
    updateProduct,
} from "@edgarguzman/drizzle/queries/product";
import {
    createProductParams,
    productIdSchema,
    updateProductParams,
} from "@edgarguzman/lib/schema/product";

import { router } from "../client";
import { protectProcedure, publicProcedure } from "../procedure";

export const productRouter = router({
    all: publicProcedure.query(async () => {
        return await fetchProducts({});
    }),

    find: publicProcedure
        .input(productIdSchema)
        .query(async () => {
            return await fetchProduct({});
        }),

    search: publicProcedure
        // .input()
        .query(async () => {
            return await searchProducts({});
        }),

    related: publicProcedure
        // .input()
        .query(async () => {}),

    create: protectProcedure
        .input(createProductParams)
        .mutation(async () => {
            return await createProduct({});
        }),

    update: protectProcedure
        .input(updateProductParams)
        .mutation(async () => {
            return await updateProduct({});
        }),

    delete: protectProcedure
        .input(productIdSchema)
        .mutation(async () => {
            return await deleteProduct({});
        }),
});
