import { and, eq } from "drizzle-orm";

import { drizzle } from "../client";
import { wishlist } from "../schema";

// TODO: add a JSDoc comment on what each function do without clicking the function name

type OrderBy = "asc" | "desc";

type FetchWishlistsParams = {
    productId: string;
    userId: string;
    orderBy?: OrderBy;
};

export async function fetchWishlists(params: Readonly<FetchWishlistsParams>) {
    if (params.orderBy === "asc") {
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
    } else if (params.orderBy === "desc") {
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
    } else {
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
}

type FetchWishlistParams = {
    productId: string;
    userId: string;
};

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
    let [result] = await drizzle
        .select()
        .from(wishlist)
        .where(eq(wishlist.id, params.userId));

    return result;
}

type CreateWishlistParams = {};

export async function createWishlist(params: Readonly<CreateWishlistParams>) {
    let [created] = await drizzle.insert(wishlist).values({}).returning();

    return created;
}

type UpdateWishlistParams = {
    id: string;
};

export async function updateWishlist(params: Readonly<UpdateWishlistParams>) {
    let [updated] = await drizzle
        .update(wishlist)
        .set({})
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
