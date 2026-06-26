import { eq, sql } from "drizzle-orm";

import { drizzle } from "../client";
import { order } from "../schema/order";
import { user } from "../schema/user";

// TODO: add a JSDoc comment on what each function do without clicking the function name

// TODO: add sort and sort field type
type FetchOrdersParams = {};

// TODO: rework this function to have a sorting system on the where clause
export async function fetchOrders(params: Readonly<FetchOrdersParams>) {
  let [result] = await drizzle
    .select({})
    .from(order)
    .orderBy(sql`${order.id}`);

  return result;
}

type FetchOrderParams = {
  id: string;
  userId: string;
};

// TODO: add a optional sorting by field on the where clause
export async function fetchOrder(params: Readonly<FetchOrderParams>) {
  let [result] = await drizzle
    .select({})
    .from(order)
    .where(eq(order.id, params.id))
    .leftJoin(order, eq(user.id, order.id));

  return result;
}

// TODO: fetch a single order by user id

// TODO: fetch all orders by user id

type CreateOrderParams = {
  userId: string;
};

export async function createOrder(params: Readonly<CreateOrderParams>) {
  let [created] = await drizzle.insert(order).values(params).returning();

  return created;
}

type UpdateOrderParams = {
  id: string;
  userId: string;
};

export async function updateOrder(params: Readonly<UpdateOrderParams>) {
  let [update] = await drizzle
    .update(order)
    .set({
      userId: params.userId,
    })
    .where(eq(order.id, params.id))
    .returning();

  return update;
}

type DeleteOrderParams = {
  id: string;
  userId: string;
};

export async function deleteOrder(params: Readonly<DeleteOrderParams>) {
  let [deleted] = await drizzle
    .delete(order)
    .where(eq(order.id, params.id))
    .returning();

  return deleted;
}

type CancelOrderParams = {};

// NOTE: use this function to confirm the canceling order before redirecting this to deleteOrder() function
export async function cancelOrder(params: Readonly<CancelOrderParams>) {}
