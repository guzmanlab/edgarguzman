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

import { router } from "@rpc/client";
import { protectProcedure } from "@rpc/procedure";

export const wishlistRouter = router({
  all: protectProcedure.query(async () => {
    return await fetchWishlists({});
  }),

  history: protectProcedure.input(wishlistIdSchema).query(async () => {}),

  find: protectProcedure
    .input(wishlistIdSchema)
    .query(async ({ ctx, input }) => {
      return await fetchWishlistByUserId({
        userId: ctx.session?.user?.id,
      });
    }),

  create: protectProcedure
    .input(createWishlistParams)
    .mutation(async ({ ctx, input }) => {
      return await createWishlist({
        productId: input.productId,
        userId: ctx.session?.user?.id,
        favorited: input.favorited,
      });
    }),

  update: protectProcedure
    .input(updateWishlistParams)
    .mutation(async ({ ctx, input }) => {
      return await updateWishlist({
        id: input.id,
        productId: input.productId,
        userId: ctx.session?.user?.id,
        favorited: input.favorited,
      });
    }),

  delete: protectProcedure
    .input(wishlistIdSchema)
    .mutation(async ({ input }) => {
      return await deleteWishlist({
        id: input.id,
      });
    }),
});
