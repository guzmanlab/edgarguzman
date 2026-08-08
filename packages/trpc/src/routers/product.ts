import {
  createProduct,
  deleteProduct,
  fetchProduct,
  fetchProducts,
  searchProducts,
  updateProduct,
} from "@edgarguzman/drizzle/queries/product";
import { z } from "zod";

import { router } from "../client";
import { protectProcedure, publicProcedure } from "../procedure";

export const productRouter = router({
  all: publicProcedure.query(async () => {
    return await fetchProducts({});
  }),

  find: publicProcedure
    .input(
      z.object({})
    )
    .query(async () => {
      return await fetchProduct({});
    }),

  search: publicProcedure
    .input(
      z.object({})
    )
    .query(async () => {
      return await searchProducts({});
    }),

  related: publicProcedure
    .input(
      z.object({})
    )
    .query(async () => {}),

  create: protectProcedure
    .input(
      z.object({})
    )
    .mutation(async () => {
      return await createProduct({});
    }),

  update: protectProcedure
    .input(
      z.object({})
    )
    .mutation(async () => {
      return await updateProduct({});
    }),

  delete: protectProcedure
    .input(
      z.object({})
    )
    .mutation(async () => {
      return await deleteProduct({});
    }),
});
