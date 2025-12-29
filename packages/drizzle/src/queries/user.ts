"use server";

// import { auth } from "@edgarguzman/auth/server";
import { eq } from "drizzle-orm";
// import { headers } from "next/headers";
// import { redirect } from "next/navigation";

import { user } from "@drizzle/schema/user";
import { drizzle } from "@drizzle/client";

// TODO: rewrite this function with auth package
export async function fetchCurrentUser() {
  let session = {
    user: {
      id: "",
      name: "",
      email: "",
      emailVerified: false,
      password: "",
      image: "",
      age: "",
    },
  };

  if (!session) return null;

  let currentUser = await drizzle
    .select()
    .from(user)
    .where(eq(user.id, session.user.id));

  return {
    ...session,
    currentUser,
  };
}

// TODO: create the findUsersOrderByDesc() function and link this function to tRPC User router

export async function fetchUsers() {
  let list = await drizzle.select().from(user);

  return list;
}

// TODO: rename the selectUsers() to fetchUser() funtion and link this function to tRPC User router
export async function selectUsers(withName: boolean) {
  return await drizzle
    .select({
      id: user.id,
      ...(withName ? { name: user.name } : {}),
    })
    .from(user);
}

// TODO: create the createUser() function and link this function to tRPC User router

// TODO: create the updateUser() function and link this function to tRPC User router

// TODO: create the deleteUser() function and link this function to tRPC User router
