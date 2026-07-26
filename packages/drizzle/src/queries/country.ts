import { and, asc, desc, eq } from "drizzle-orm";

import { drizzle } from "../client";
import { country } from "../schema/country";

// TODO: add a JSDoc comment on what each function do without clicking the function name

type OrderBy = "asc" | "desc";

type FetchCountriesParams = {
    id: string;
    userId: string;
    orderBy?: OrderBy;
};

export async function fetchCountries(params: Readonly<FetchCountriesParams>) {
    if (params.orderBy === "asc") {
        let [result] = await drizzle
            .select()
            .from(country)
            .orderBy(asc(country.createdAt));

        return result;
    } else if (params.orderBy === "desc") {
        let [result] = await drizzle
            .select()
            .from(country)
            .orderBy(desc(country.createdAt));

        return result;
    } else {
        let [result] = await drizzle.select().from(country);

        return result;
    }
}

type FetchCountryParams = {
    id: string;
};

export async function fetchCountry(params: Readonly<FetchCountryParams>) {
    let [result] = await drizzle
        .select()
        .from(country)
        .where(eq(country.id, params.id));

    return result;
}

type CreateCountryParams = {
    userId: string;
    title: string;
    key: string;
};

export async function createCountry(params: Readonly<CreateCountryParams>) {
    let [created] = await drizzle
        .insert(country)
        .values({
            ...params,
        })
        .returning();

    return created;
}

type UpdateCountryParams = {
    id: string;
    userId: string;
    title: string;
    key: string;
};

export async function updateCountry(params: Readonly<UpdateCountryParams>) {
    let [updated] = await drizzle
        .update(country)
        .set({
            ...params,
        })
        .returning();

    return updated;
}

type DeleteCountryParams = {
    id: string;
    userId: string;
};

export async function deleteCountry(params: Readonly<DeleteCountryParams>) {
    let [deleted] = await drizzle
        .delete(country)
        .where(
            and(eq(country.id, params.id), eq(country.userId, params.userId)),
        )
        .returning();

    return deleted;
}
