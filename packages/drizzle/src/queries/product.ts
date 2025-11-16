"use server";

import { eq } from "drizzle-orm";

import { drizzle } from "@drizzle/client";
import { product } from "@drizzle/schema/product";

export async function fetchProducts() {
  let list = await drizzle.select().from(product);

  return list;
}

type FetchProductParams = {
  id: string;
};

export async function fetchProduct(params: Readonly<FetchProductParams>) {
  let [result] = await drizzle
    .select()
    .from(product)
    .where(eq(product.id, params.id));

  return result;
}

type CreateProductParams = {
  userId: string;
  title: string;
  description: string | null;
  image: string | null;
  quantity: number;
  price: string;
  activated: boolean;
};

export async function createProduct(params: Readonly<CreateProductParams>) {
  let [result] = await drizzle
    .insert(product)
    .values({
      userId: params.userId,
      title: params.title,
      description: params.description,
      image: params.image,
      quantity: Number(params.quantity.toFixed()),
      price: params.price,
      activated: params.activated,
    })
    .returning();

  return result;
}

type UpdateProductParams = {
  id: string;
  userId: string;
  title: string;
  description: string | null;
  image: string | null;
  quantity: number;
  price: string;
  activated: boolean;
};

export async function updateProduct(params: Readonly<UpdateProductParams>) {
  let [result] = await drizzle
    .update(product)
    .set({
      userId: params.userId,
      title: params.title,
      description: params.description,
      image: params.image,
      quantity: Number(params.quantity.toFixed()),
      price: params.price,
      activated: params.activated,
    })
    .where(eq(product.id, params.id))
    .returning();

  return result;
}

type DeleteProductParams = {
  id: string;
};

export async function deleteProduct(params: Readonly<DeleteProductParams>) {
  let [deleted] = await drizzle
    .delete(product)
    .where(eq(product.id, params.id))
    .returning();

  return deleted;
}
