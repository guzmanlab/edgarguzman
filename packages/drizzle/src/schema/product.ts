import { init } from "@paralleldrive/cuid2";
import { relations } from "drizzle-orm";
import {
  boolean,
  decimal,
  index,
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

import { user } from "@drizzle/schema/user";
import { wishlist } from "@drizzle/schema/wishlist";

const createId = init({
  length: 24,
});

export const stockStatusEnum = pgEnum("stock_status", ["Stock", "OutOfStock"]);

export const product = pgTable(
  "products",
  {
    id: varchar({
      length: 24,
    })
      .primaryKey()
      .$defaultFn(() => createId()),
    userId: varchar({
      length: 24,
    })
      .$defaultFn(() => createId())
      .references(() => user.id)
      .notNull(),

    title: varchar().notNull(),
    slug: varchar().notNull(),
    description: text(),
    image: varchar(),
    quantity: integer().notNull(),
    price: decimal().notNull(),

    activated: boolean().default(true).notNull(),

    status: stockStatusEnum().default("Stock").notNull(),

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
    index("product_user_id_idx").on(table.userId),
    index("product_title_idx").on(table.title),
  ],
);

export const productRelations = relations(product, ({ one, many }) => ({
  user: one(user, {
    fields: [product.userId],
    references: [user.id],
  }),
  wishlists: many(wishlist),
}));

export type StockStatus = (typeof stockStatusEnum.enumValues)[number];

export type Product = typeof product.$inferSelect;

export type CreateProduct = typeof product.$inferInsert;
