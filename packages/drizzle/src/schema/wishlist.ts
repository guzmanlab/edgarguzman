import { init } from "@paralleldrive/cuid2";
import { relations } from "drizzle-orm";
import {
  boolean,
  index,
  pgTable,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

import { product } from "@drizzle/schema/product";
import { user } from "@drizzle/schema/user";

const createId = init({
  length: 24,
});

export const wishlist = pgTable(
  "wishlists",
  {
    id: varchar()
      .primaryKey()
      .$defaultFn(() => createId()),
    productId: varchar()
      .$defaultFn(() => createId())
      .references(() => product.id)
      .notNull(),
    userId: varchar()
      .$defaultFn(() => createId())
      .references(() => user.id)
      .notNull(),

    favorited: boolean().default(false).notNull(),

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
    index("wishlist_product_id_idx").on(table.productId),
    index("wishlist_user_id_idx").on(table.userId),
  ],
);

export const wishlistRelations = relations(wishlist, ({ one }) => ({
  product: one(product, {
    fields: [wishlist.productId],
    references: [product.id],
  }),
  user: one(user, {
    fields: [wishlist.userId],
    references: [user.id],
  }),
}));

export type Wishlist = typeof wishlist.$inferSelect;

export type CreateWishlist = typeof wishlist.$inferInsert;
