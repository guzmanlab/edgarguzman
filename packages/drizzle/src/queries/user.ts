import { asc, desc, eq } from "drizzle-orm";
import { headers } from "next/headers";

import { auth } from "../../../auth/src/server";
import { drizzle } from "../client";
import { user } from "../schema/user";
import { deleteOrder } from "./order";
import { deleteWishlist } from "./wishlist";

// TODO: add a JSDoc comment on what each function do without clicking the function name

export async function fetchCurrentUser() {
    let session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) return null;

    let currentUser = await drizzle
        .select()
        .from(user)
        .where(eq(user.id, session.user.id));

    if (!currentUser) return null;

    return {
        ...session,
        currentUser,
    };
}

type OrderBy = "asc" | "desc";

type FetchUsersParams = {
    orderBy?: OrderBy;
};

export async function fetchUsers(params: Readonly<FetchUsersParams>) {
    if (params.orderBy === "asc") {
        let [result] = await drizzle
            .select()
            .from(user)
            .orderBy(asc(user.createdAt));

        return result;
    } else if (params.orderBy === "desc") {
        let [result] = await drizzle
            .select()
            .from(user)
            .orderBy(desc(user.createdAt));

        return result;
    } else {
        let [result] = await drizzle.select().from(user);

        return result;
    }
}

interface FindUserParams {
    id: string;
}

export async function findUser(params: Readonly<FindUserParams>) {
    let [result] = await drizzle
        .select()
        .from(user)
        .where(eq(user.id, params.id));

    return result;
}

interface CreateUserParams {
    name: string;
    email: string;
    password: string;
    image: string;
}

// TODO: link this function to tRPC User router
export async function createUser(params: CreateUserParams) {
    let [created] = await drizzle
        .insert(user)
        .values({
            name: params.name,
            email: params.email,
            password: params.password,
            image: params.image,
        })
        .returning();

    return created;
}

interface UpdateUserParams {
    id: string;
}

// TODO: link this function to tRPC User router
export async function updateUser(params: Readonly<UpdateUserParams>) {
    let [updated] = await drizzle
        .update(user)
        .set({})
        .where(eq(user.id, params.id))
        .returning();

    return updated;
}

interface DeleteUserParams {
    id: string;
    userId: string;
}

// TODO: link this function to tRPC User router
export async function deleteUser(params: DeleteUserParams) {
    // add the user order deletion fn first
    await deleteOrder({
        id: params.id,
        userId: params.userId,
    });

    // check if the user have a wishlist and then delete wishlist fn first
    await deleteWishlist({
        id: params.id,
    });

    // comment line
    let [deleted] = await drizzle
        .delete(user)
        .where(eq(user.id, params.id))
        .returning();

    return deleted;
}
