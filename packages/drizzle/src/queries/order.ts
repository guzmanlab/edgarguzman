import { eq, sql } from "drizzle-orm";

import { drizzle } from "@drizzle/client";
import { order } from "@drizzle/schema/order";
import { user } from "@drizzle/schema/user";

// type OrderParams = {};

// fetch all orders

type FetchOrdersParams = {};

export async function fetchOrders(params: Readonly<FetchOrdersParams>) {
  let [result] = await drizzle
    .select({})
    .from(order)
    .orderBy(sql`${order.id}`);

  return result;
}

// fetch a single order

type FetchOrderParams = {
  id: string;
  userId: string;
};

export async function fetchOrder(params: Readonly<FetchOrderParams>) {
  let [result] = await drizzle
    .select({})
    .from(order)
    .where(eq(order.id, params.id))
    .leftJoin(order, eq(user.id, order.id));

  return result;
}

// fetch a single order by user id

// fetch all orders by user id

// create order

type CreateOrderParams = {
  userId: string;
};

export async function createOrder(params: Readonly<CreateOrderParams>) {
  let [created] = await drizzle.insert(order).values(params).returning();

  return created;
}

// update order

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

// delete order

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

// // temporary order function

// type OrderParams = {};

// export async function Order(params: Readonly<OrderParams>) {}
