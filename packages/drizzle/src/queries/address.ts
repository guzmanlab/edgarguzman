import { eq } from "drizzle-orm";

import { drizzle } from "@drizzle/client";
import { address } from "@drizzle/schema/address";

type FetchAddressesParams = {
  countryId: string | null;
  userId: string;
};

export async function fetchAddresses(params: Readonly<FetchAddressesParams>) {
  let [result] = await drizzle
    .select()
    .from(address)
    .where(eq(address.userId, params.userId));

  return result;
}

type FetchAddressParams = {
  countryId: string | null;
  userId: string;
};

export async function fetchAddress(params: Readonly<FetchAddressParams>) {
  let [result] = await drizzle
    .select()
    .from(address)
    .where(eq(address.countryId, params.countryId));

  return result;
}

type AddressParams = {
  countryId: string | null;
  userId: string;
};

export async function fetchAddressBy(params: Readonly<AddressParams>) {
  let [result] = await drizzle.select().from(address).where(
    // and(
    eq(address.userId, params.userId),
    // eq(address.countryId, params.countryId),
    // ),
  );

  return result;
}

type CreateAddressParams = {
  countryId: string;
  userId: string;
  title: string;
  addressLine1: string;
  addressLine2: string | null;
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
  countryId: string;
  userId: string;
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
      countryId: params.countryId,
      userId: params.userId,
      title: params.title,
      addressLine1: params.addressLine1,
      addressLine2: params.addressLine2,
      city: params.city,
      postalCode: params.postalCode,
      phone: params.phone,
      defaulted: params.defaulted,
    })
    .where(eq(address.id, params.id))
    .returning();

  return updated;
}

type DeleteAddressParams = {
  countryId: string;
  userId: string;
};

export async function deleteAddress(params: Readonly<DeleteAddressParams>) {
  let [deleted] = await drizzle
    .delete(address)
    .where(eq(address.userId, params.userId))
    .returning();

  return deleted;
}
