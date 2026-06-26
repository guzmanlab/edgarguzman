import { eq } from "drizzle-orm";

import { drizzle } from "../client";
import { customer } from "../schema/customer";

// TODO: add a JSDoc comment on what each function do without clicking the function name

// TODO: add a Sort between asc or desc
// TODO: add the Sort type
type FetchCustomersParams = {
  id: string;
  userId: string;
};

// TODO: rework on this function for a optional sorting on the where clause
export async function fetchCustomers(params: Readonly<FetchCustomersParams>) {
  let [result] = await drizzle
    .select()
    .from(customer)
    .where(eq(customer.userId, params.userId));

  return result;
}

type FetchCustomerParams = {
  userId: string;
};

export async function fetchCustomer(params: Readonly<FetchCustomerParams>) {
  let [result] = await drizzle
    .select()
    .from(customer)
    .where(eq(customer.userId, params.userId));

  return result;
}

type CreateCustomerParams = {
  userId: string;
  name: string;
  email: string;
};

export async function createCustomer(params: Readonly<CreateCustomerParams>) {
  let [result] = await drizzle.insert(customer).values(params).returning();

  return result;
}

type UpdateCustomerParams = {
  id: string;
  userId: string;
  name: string;
  email: string;
};

export async function updateCustomer(params: Readonly<UpdateCustomerParams>) {
  let [updated] = await drizzle
    .update(customer)
    .set({
      userId: params.userId,
      name: params.name,
      email: params.email,
    })
    .where(eq(customer.id, params.id))
    .returning();

  return updated;
}

type DeleteCustomerParams = {
  id: string;
  userId: string;
};

export async function deleteCustomer(params: Readonly<DeleteCustomerParams>) {
  let [deleted] = await drizzle
    .delete(customer)
    .where(eq(customer.userId, params.userId))
    .returning();

  return deleted;
}
