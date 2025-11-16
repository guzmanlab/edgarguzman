import { and, eq } from "drizzle-orm";

import { drizzle } from "@drizzle/client";
import { wishlist } from "@drizzle/schema";

type FetchWishlistsParams = {
  numberOfUUIDsToGenerate: string;
};

export async function fetchWishlists(params: Readonly<FetchWishlistsParams>) {
  try {
    let [result] = await drizzle
      .select()
      .from(wishlist)
      .where(
        and(
          eq(wishlist.id, params.numberOfUUIDsToGenerate),
          eq(wishlist.productId, params.numberOfUUIDsToGenerate),
          eq(wishlist.userId, params.numberOfUUIDsToGenerate),
        ),
      );

    return result;
  } catch (e) {
    console.error("There is a Server Error");
    console.error(e);
  }
}

type FetchWishlistParams = {
  numberOfUUIDsToGenerate: string;
};

export async function fetchWishlist(params: Readonly<FetchWishlistParams>) {
  try {
    let [result] = await drizzle
      .select()
      .from(wishlist)
      .where(eq(wishlist.id, params.numberOfUUIDsToGenerate));

    return result;
  } catch (e) {
    console.error("There is a Server Error");
    console.error(e);
  }
}

type FetchWishlistByUserIdParams = {
  userId: string;
};

export async function fetchWishlistByUserId(
  params: Readonly<FetchWishlistByUserIdParams>,
) {
  try {
    let [result] = await drizzle
      .select()
      .from(wishlist)
      .where(eq(wishlist.id, params.userId));

    return result;
  } catch (e) {
    console.error("There is a Server Error");
    console.error(e);
  }
}

type FetchWishlistByProductIdParams = {
  productId: string;
};

export async function fetchWishlistByProductId(
  params: Readonly<FetchWishlistByProductIdParams>,
) {
  try {
    let [result] = await drizzle
      .select()
      .from(wishlist)
      .where(eq(wishlist.id, params.productId));

    return result;
  } catch (e) {
    console.error("There is a Server Error");
    console.error(e);
  }
}

type ToggleWishlistFavoritedParams = {
  favorited: boolean;
};

export async function toggleWishlistFavorited(
  params: Readonly<ToggleWishlistFavoritedParams>,
) {
  try {
    let [result] = await drizzle
      .update(wishlist)
      .set({
        favorited: params.favorited,
      })
      .returning();

    return result;
  } catch (e) {
    console.error("There is a Server Error");
    console.error(e);
  }
}

type CreateWishlistParams = {
  userId: string;
  productId: string;
  favorited: boolean;
};

export async function createWishlist(params: Readonly<CreateWishlistParams>) {
  try {
    let [created] = await drizzle
      .insert(wishlist)
      .values({
        userId: params.userId,
        productId: params.productId,
        favorited: params.favorited,
      })
      .returning();

    return created;
  } catch (e) {
    console.error("There is a Server Error");
    console.error(e);
  }
}

type UpdateWishlistParams = {
  id: string;
  userId: string;
  productId: string;
  favorited: boolean;
};

export async function updateWishlist(params: Readonly<UpdateWishlistParams>) {
  try {
    let [updated] = await drizzle
      .update(wishlist)
      .set({
        userId: params.userId,
        productId: params.productId,
        favorited: params.favorited,
      })
      .where(eq(wishlist.id, params.id))
      .returning();

    return updated;
  } catch (e) {
    console.error("There is a Server Error");
    console.error(e);
  }
}

type DeleteWishlistParams = {
  id: string;
};

export async function deleteWishlist(params: Readonly<DeleteWishlistParams>) {
  try {
    let [deleted] = await drizzle
      .delete(wishlist)
      .where(eq(wishlist.id, params.id))
      .returning();

    return deleted;
  } catch (e) {
    console.error("There is a Server Error");
    console.error(e);
  }
}
