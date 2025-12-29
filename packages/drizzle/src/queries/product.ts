"use server";

import { eq } from "drizzle-orm";

import { drizzle } from "@drizzle/client";
import { product } from "@drizzle/schema/product";

// TODO: add a Sort and FetchProducts type then link it to fetchProducts() function

// TODO: add a JSDoc comment on what this function do without clicking the function name
// TODO: rework this function to have a sorting system on the where clause
// TODO: add a type to this function
export async function fetchProducts() {
  let list = await drizzle.select().from(product);

  return list;
}

// TODO: add a Sort between id: string or slug: string
type FetchProductParams = {
  id: string;
};

// TODO: add a JSDoc comment on what this function do without clicking the function name
// TODO: rework on this function for a optional sorting on the where clause
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

// TODO: add a JSDoc comment on what this function do without clicking the function name
export async function createProduct(params: Readonly<CreateProductParams>) {
  let [result] = await drizzle
    .insert(product)
    .values({
      userId: params.userId,
      title: params.title,
      // TODO: add slug column
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

// TODO: add a JSDoc comment on what this function do without clicking the function name
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

// TODO: add a JSDoc comment on what this function do without clicking the function name
export async function deleteProduct(params: Readonly<DeleteProductParams>) {
  let [deleted] = await drizzle
    .delete(product)
    .where(eq(product.id, params.id))
    .returning();

  return deleted;
}

// TODO: create a searchProducts() function with type

// TODO: create a fetchRelatedProducts() function with type
