import {
  createWishlist,
  deleteWishlist,
  fetchWishlistByUserId,
  fetchWishlists,
  updateWishlist,
} from "@edgarguzman/drizzle/queries/wishlist";
import {
  createWishlistParams,
  updateWishlistParams,
  wishlistIdSchema,
} from "@edgarguzman/lib/schema/wishlist";

import { router } from "../client";
import { protectProcedure } from "../procedure";

export const wishlistRouter = router({
  all: protectProcedure.query(async () => {
    return await fetchWishlists({});
  }),

  history: protectProcedure
    .input(wishlistIdSchema)
    .query(async () => {}),

  find: protectProcedure
    .input(wishlistIdSchema)
    .query(async () => {
      return await fetchWishlistByUserId({});
    }),

  create: protectProcedure
    .input(createWishlistParams)
    .mutation(async () => {
      return await createWishlist({});
    }),

  update: protectProcedure
    .input(updateWishlistParams)
    .mutation(async () => {
      return await updateWishlist({});
    }),

  delete: protectProcedure
    .input(wishlistIdSchema)
    .mutation(async () => {
      return await deleteWishlist({});
    }),
});
