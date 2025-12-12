import { fetchWishlists } from "@edgarguzman/drizzle/queries/wishlist";
import { wishlist } from "@edgarguzman/drizzle/schema/wishlist";
import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-zod";
import { z } from "zod";

import { timestamp } from "@lib/time-stamp";

const baseSchema = createSelectSchema(wishlist).omit(timestamp);

export const createWishlistSchema =
  createInsertSchema(wishlist).omit(timestamp);

export const createWishlistParams = baseSchema
  .extend({
    favorited: z.boolean().default(false).nullish(),
  })
  .omit({
    id: true,
    productId: true,
    userId: true,
  });

export const updateWishlistSchema =
  createUpdateSchema(wishlist).omit(timestamp);

export const updateWishlistParams = baseSchema
  .extend({
    favorited: z.boolean().default(false).nullish(),
  })
  .omit({
    productId: true,
    userId: true,
  });

export const wishlistIdSchema = baseSchema.pick({
  id: true,
});

export type Wishlist = typeof wishlist.$inferSelect;

export type CreateWishlist = z.infer<typeof createWishlistSchema>;

export type CreateWishlistParams = z.infer<typeof createWishlistParams>;

export type UpdateWishlist = z.infer<typeof updateWishlistSchema>;

export type UpdateWishlistParams = z.infer<typeof updateWishlistParams>;

export type WishlistId = z.infer<typeof wishlistIdSchema>["id"];

export type CompleteWishlist = Awaited<
  ReturnType<typeof fetchWishlists>
>["wishlists"][number];
