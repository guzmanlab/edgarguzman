import { asc, desc, eq } from "drizzle-orm";

import { drizzle } from "../client";
import { address } from "../schema/address";

// TODO: add a JSDoc comment on what each function do without clicking the function name

type OrderBy = "asc" | "desc";

type FetchAddressesParams = {
    countryId: string | null;
    userId: string;
    orderBy?: OrderBy;
};

export async function fetchAddresses(params: Readonly<FetchAddressesParams>) {
    if (params.orderBy === "asc") {
        let [result] = await drizzle
            .select()
            .from(address)
            .where(eq(address.userId, params.userId))
            .orderBy(asc(address.createdAt));

        return result;
    } else if (params.orderBy === "desc") {
        let [result] = await drizzle
            .select()
            .from(address)
            .where(eq(address.userId, params.userId))
            .orderBy(desc(address.createdAt));

        return result;
    } else {
        let [result] = await drizzle
            .select()
            .from(address)
            .where(eq(address.userId, params.userId));

        return result;
    }
}

type FetchAddressParams = {
    countryId: string;
    userId: string;
};

export async function fetchAddress(params: Readonly<FetchAddressParams>) {
    let [result] = await drizzle
        .select()
        .from(address)
        .where(eq(address.countryId, params.countryId));

    return result;
}

type CreateAddressParams = {
    countryId: string;
    userId: string;
    title: string;
    addressLine1: string;
    addressLine2?: string | null;
    city: string;
    postalCode: string;
    phone: string;
    defaulted: boolean;
};

export async function createAddress(params: Readonly<CreateAddressParams>) {
    let [result] = await drizzle
        .insert(address)
        .values({
            ...params,
        })
        .returning();

    return result;
}

type UpdateAddressParams = {
    id: string;
    // countryId: string;
    // userId: string;
    title: string;
    addressLine1: string;
    addressLine2: string | null;
    city: string;
    postalCode: string;
    phone: string;
    defaulted: boolean;
};

export async function updateAddress(params: Readonly<UpdateAddressParams>) {
    let [updated] = await drizzle
        .update(address)
        .set({
            ...params,
        })
        .where(eq(address.id, params.id))
        .returning();

    return updated;
}

type DeleteAddressParams = {
    userId: string;
};

export async function deleteAddress(params: Readonly<DeleteAddressParams>) {
    let [deleted] = await drizzle
        .delete(address)
        .where(eq(address.userId, params.userId))
        .returning();

    return deleted;
}
