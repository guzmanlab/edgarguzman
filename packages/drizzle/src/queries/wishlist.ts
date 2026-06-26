import { and, eq } from "drizzle-orm";

import { drizzle } from "../client";
import { wishlist } from "../schema";

// TODO: add a JSDoc comment on what each function do without clicking the function name

type FetchWishlistsParams = {
  productId: string;
  userId: string;
};

// TODO: rework in order to see every user that in the database without having to insert a user id
export async function fetchWishlists(params: Readonly<FetchWishlistsParams>) {
  let [result] = await drizzle
    .select()
    .from(wishlist)
    .where(
      and(
        eq(wishlist.id, params.productId),
        eq(wishlist.productId, params.userId),
      ),
    );

  return result;
}

type FetchWishlistParams = {
  productId: string;
  userId: string;
};

// TODO: rework in order to see every user that in the database when inserting a user id
export async function fetchWishlist(params: Readonly<FetchWishlistParams>) {
  let [result] = await drizzle
    .select()
    .from(wishlist)
    .where(
      and(
        eq(wishlist.id, params.productId),
        eq(wishlist.productId, params.userId),
      ),
    );

  return result;
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

type ToggleWishlistFavoritedParams = {
  favorited: boolean;
};

// TODO: this function links to nowhere
export async function toggleWishlistFavorited(
  params: Readonly<ToggleWishlistFavoritedParams>,
) {
  let [result] = await drizzle
    .update(wishlist)
    .set({
      favorited: params.favorited,
    })
    .returning();

  return result;
}

type CreateWishlistParams = {
  userId: string;
  productId: string;
  favorited: boolean;
};

export async function createWishlist(params: Readonly<CreateWishlistParams>) {
  let [created] = await drizzle
    .insert(wishlist)
    .values({
      userId: params.userId,
      productId: params.productId,
      favorited: params.favorited,
    })
    .returning();

  return created;
}

type UpdateWishlistParams = {
  id: string;
  userId: string;
  productId: string;
  favorited: boolean;
};

export async function updateWishlist(params: Readonly<UpdateWishlistParams>) {
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
}

type DeleteWishlistParams = {
  id: string;
};

export async function deleteWishlist(params: Readonly<DeleteWishlistParams>) {
  let [deleted] = await drizzle
    .delete(wishlist)
    .where(eq(wishlist.id, params.id))
    .returning();

  return deleted;
}
