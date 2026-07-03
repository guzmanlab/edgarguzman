import { eq } from "drizzle-orm";

import { drizzle } from "../client";
import { product } from "../schema/product";

// TODO: add a JSDoc comment on what each function do without clicking the function name

type OrderBy = "asc" | "desc";

type FetchProductsParams = {
    orderBy?: OrderBy;
};

export async function fetchProducts(params: Readonly<FetchProductsParams>) {
    if (params.orderBy === "asc") {
        let list = await drizzle.select().from(product);

        return list;
    } else if (params.orderBy === "desc") {
        let list = await drizzle.select().from(product);

        return list;
    } else {
        let list = await drizzle.select().from(product);

        return list;
    }
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
    slug: string;
    description?: string | null;
    image?: string | null;
    quantity: number;
    price: string;
};

export async function createProduct(params: Readonly<CreateProductParams>) {
    let [result] = await drizzle
        .insert(product)
        .values({
            ...params,
            quantity: Number(params.quantity.toFixed()),
        })
        .returning();

    return result;
}

type UpdateProductParams = {
    id: string;
    title: string;
    description?: string | null;
    image?: string | null;
    quantity: number;
    price: string;
};

export async function updateProduct(params: Readonly<UpdateProductParams>) {
    let [result] = await drizzle
        .update(product)
        .set({
            ...params,
            quantity: Number(params.quantity.toFixed()),
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

type SearchProductParams = {};

export async function searchProducts(params: Readonly<SearchProductParams>) {}
