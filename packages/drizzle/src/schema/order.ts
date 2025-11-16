import { init } from "@paralleldrive/cuid2";
import { relations } from "drizzle-orm";
import {
  index,
  pgEnum,
  pgTable,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

import { product } from "@drizzle/schema/product";
import { user } from "@drizzle/schema/user";

const createId = init({
  length: 24,
});

export const statusEnum = pgEnum("status", [
  "Created",
  "NotPaid",
  "Processing",
  "Failed",
  "Paid",
]);

export const order = pgTable(
  "orders",
  {
    id: varchar({
      length: 24,
    })
      .primaryKey()
      .$defaultFn(() => createId()),
    productId: varchar({
      length: 24,
    })
      .$defaultFn(() => createId())
      .references(() => product.id)
      .notNull(),
    userId: varchar({
      length: 24,
    })
      .$defaultFn(() => createId())
      .references(() => user.id)
      .notNull(),

    // TODO: add the following columns later

    status: statusEnum().default("Created").notNull(),

    createdAt: timestamp({
      withTimezone: true,
    })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp({
      withTimezone: true,
    }).$onUpdateFn(() => new Date()),
  },
  (table) => [
    index("order_product_id_idx").on(table.productId),
    index("order_user_id_idx").on(table.userId),
  ],
);

export const orderRealtions = relations(order, ({ one }) => ({
  user: one(user, {
    fields: [order.userId],
    references: [user.id],
  }),
}));

export type Status = (typeof statusEnum.enumValues)[number];

export type Order = typeof order.$inferSelect;

export type CreateOrder = typeof order.$inferInsert;
