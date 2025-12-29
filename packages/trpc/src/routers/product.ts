import {
  createProduct,
  deleteProduct,
  fetchProduct,
  fetchProducts,
  updateProduct,
} from "@edgarguzman/drizzle/queries/product";
// import { product } from "@edgarguzman/drizzle/schema/product";
import {
  createProductParams,
  productIdSchema,
  updateProductParams,
} from "@edgarguzman/lib/schema/product";

import { router } from "@rpc/client";
import { protectProcedure, publicProcedure } from "@rpc/procedure";

export const productRouter = router({
  all: publicProcedure.query(async () => {
    return await fetchProducts();
  }),

  find: publicProcedure.input(productIdSchema).mutation(async ({ input }) => {
    return await fetchProduct({
      id: input.id,
    });
  }),

  search: publicProcedure
    // .input()
    .query(async () => {}),

  related: publicProcedure
    // .input()
    .query(async () => {}),

  create: protectProcedure
    .input(createProductParams)
    .mutation(async ({ input }) => {
      return await createProduct({
        userId: input.userId,
        title: input.title,
        description: input.description,
        image: input.image,
        price: input.price,
        quantity: input.quantity,
        activated: input.activated,
      });
    }),

  update: protectProcedure
    .input(updateProductParams)
    .mutation(async ({ input }) => {
      return await updateProduct({
        id: input.id,
        userId: input.userId,
        title: input.title,
        description: input.description,
        image: input.image,
        price: input.price,
        quantity: input.quantity,
        activated: input.activated,
      });
    }),

  delete: protectProcedure
    .input(productIdSchema)
    .mutation(async ({ input }) => {
      return await deleteProduct({
        id: input.id,
      });
    }),
});
