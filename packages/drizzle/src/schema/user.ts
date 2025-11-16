import { init } from "@paralleldrive/cuid2";
import { relations } from "drizzle-orm";
import {
  index,
  pgEnum,
  pgTable,
  timestamp,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";

import { account } from "@drizzle/schema/account";
import { address } from "@drizzle/schema/address";
import { country } from "@drizzle/schema/country";
import { customer } from "@drizzle/schema/customer";
import { order } from "@drizzle/schema/order";
import { product } from "@drizzle/schema/product";
import { session } from "@drizzle/schema/session";
import { wishlist } from "@drizzle/schema/wishlist";

const createId = init({
  length: 24,
});

export const roleEnum = pgEnum("role", ["User", "Admin"]);

export const user = pgTable(
  "users",
  {
    id: varchar()
      .primaryKey()
      .$defaultFn(() => createId()),

    name: varchar().notNull(),
    email: varchar().unique().notNull(),
    emailVerified: timestamp({
      withTimezone: true,
    })
      .defaultNow()
      .notNull(),
    password: varchar().notNull(),
    image: varchar(),

    role: roleEnum().default("User").notNull(),

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
    index("user_name_idx").on(table.name),
    uniqueIndex("user_email_idx").on(table.email),
  ],
);

export const userRelations = relations(user, ({ many }) => ({
  accounts: many(account),
  address: many(address),
  countries: many(country),
  customers: many(customer),
  orders: many(order),
  products: many(product),
  sessions: many(session),
  wishlists: many(wishlist),
}));

export type Role = (typeof roleEnum.enumValues)[number];

export type User = typeof user.$inferSelect;

export type CreateUser = typeof user.$inferInsert;
