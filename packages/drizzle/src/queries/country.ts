import { and, eq } from "drizzle-orm";

import { drizzle } from "@drizzle/client";
import { country } from "@drizzle/schema/country";

type FetchCountriesParams = {
  id: string;
  userId: string;
};

// TODO: add a JSDoc comment on what this function do without clicking the function name
// TODO: rework on this function for a optional sorting on the where clause
// TODO: also have abc function as well
export async function fetchCountries(params: Readonly<FetchCountriesParams>) {
  let [result] = await drizzle.select().from(country);

  return result;
}

type FetchCountryParams = {
  id: string;
};

// TODO: add a JSDoc comment on what this function do without clicking the function name
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

// TODO: add a JSDoc comment on what this function do without clicking the function name
export async function createCountry(params: Readonly<CreateCountryParams>) {
  let [created] = await drizzle.insert(country).values(params).returning();

  return created;
}

type UpdateCountryParams = {
  id: string;
  userId: string;
  title: string;
  key: string;
};

// TODO: add a JSDoc comment on what this function do without clicking the function name
export async function updateCountry(params: Readonly<UpdateCountryParams>) {
  let [updated] = await drizzle.update(country).set(params).returning();

  return updated;
}

type DeleteCountryParams = {
  id: string;
  userId: string;
};

// TODO: add a JSDoc comment on what this function do without clicking the function name
export async function deleteCountry(params: Readonly<DeleteCountryParams>) {
  let [deleted] = await drizzle
    .delete(country)
    .where(and(eq(country.id, params.id), eq(country.userId, params.userId)))
    .returning();

  return deleted;
}
