import {
  createWishlist,
  deleteWishlist,
  fetchWishlistByUserId,
  fetchWishlists,
  updateWishlist,
} from "@edgarguzman/drizzle/queries/wishlist";
import { z } from "zod";

import { router } from "../client";
import { protectProcedure } from "../procedure";

export const wishlistRouter = router({
  all: protectProcedure.query(async () => {
    return await fetchWishlists({});
  }),

  history: protectProcedure
    .input(
      z.object({})
    )
    .query(async () => {}),

  find: protectProcedure
    .input(
      z.object({})
    )
    .query(async () => {
      return await fetchWishlistByUserId({});
    }),

  create: protectProcedure
    .input(
      z.object({})
    )
    .mutation(async () => {
      return await createWishlist({});
    }),

  update: protectProcedure
    .input(
      z.object({})
    )
    .mutation(async () => {
      return await updateWishlist({});
    }),

  delete: protectProcedure
    .input(
      z.object({})
    )
    .mutation(async () => {
      return await deleteWishlist({});
    }),
});
