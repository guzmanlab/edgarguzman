import { auth } from "@edgarguzman/auth/server";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";

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

export async function fetchUsers() {
  let list = await drizzle.select().from(user);

  return list;
}

export async function selectUsers(withName: boolean) {
  return await drizzle
    .select({
      id: user.id,
      ...(withName
        ? {
            name: user.name,
          }
        : {}),
    })
    .from(user);
}

interface CreateUserParams {
  name: string;
  email: string;
  password: string;
  image: string;
}

// TODO: link this function to tRPC User router
export async function createUser(params: CreateUserParams) {
  // comment line
  return await drizzle
    .insert(user)
    .values({
      name: params.name,
      email: params.email,
      password: params.password,
      image: params.image,
    })
    .returning();
}

// TODO: link this function to tRPC User router
export async function updateUser() {}

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

  // add a delete a user using drizzle orm
  return await drizzle.delete(user).where(eq(user.id, params.id)).returning();
}
