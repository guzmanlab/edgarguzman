import { eq, sql } from "drizzle-orm";

import { drizzle } from "@drizzle/client";
import { order } from "@drizzle/schema/order";
import { user } from "@drizzle/schema/user";

// TODO: rename this type to be sort
// type OrderParams = {};
// TODO: add a sort field type

// TODO: add sort and sort field type into FetchOrdersParams type
type FetchOrdersParams = {};

// TODO: add a JSDoc comment on what this function do without clicking the function name
// TODO: rework this function to have a sorting system on the where clause
export async function fetchOrders(params: Readonly<FetchOrdersParams>) {
  let [result] = await drizzle
    .select({})
    .from(order)
    .orderBy(sql`${order.id}`);

  return result;
}

// TODO: fetch a single order

type FetchOrderParams = {
  id: string;
  userId: string;
};
// TODO: add a JSDoc comment on what this function do without clicking the function name
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

// TODO: create order

type CreateOrderParams = {
  userId: string;
};

// TODO: add a JSDoc comment on what this function do without clicking the function name
export async function createOrder(params: Readonly<CreateOrderParams>) {
  let [created] = await drizzle.insert(order).values(params).returning();

  return created;
}

// TODO: update order

type UpdateOrderParams = {
  id: string;
  userId: string;
};

// TODO: add a JSDoc comment on what this function do without clicking the function name
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

// TODO: delete order

type DeleteOrderParams = {
  id: string;
  userId: string;
};

// TODO: add a JSDoc comment on what this function do without clicking the function name
export async function deleteOrder(params: Readonly<DeleteOrderParams>) {
  let [deleted] = await drizzle
    .delete(order)
    .where(eq(order.id, params.id))
    .returning();

  return deleted;
}

// TODO: rename this temporary order function to cancelOrder function

// TODO: rename the function type to CancelOrderParams
// type OrderParams = {};

// // TODO: add a JSDoc comment on what this function do without clicking the function name
// // TODO: rename the function type to CancelOrderParams
// // NOTE: use this function to confirm the canceling order before redirecting this to deleteOrder() function
// export async function Order(params: Readonly<OrderParams>) {}
