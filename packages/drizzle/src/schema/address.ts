import { init } from "@paralleldrive/cuid2";
import { relations } from "drizzle-orm";
import {
  boolean,
  index,
  pgTable,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

import { country } from "@drizzle/schema/country";
import { user } from "@drizzle/schema/user";

const createId = init({
  length: 24,
});

export const address = pgTable(
  "addresses",
  {
    id: varchar({
      length: 24,
    })
      .primaryKey()
      .$defaultFn(() => createId()),
    countryId: varchar({
      length: 24,
    })
      .$defaultFn(() => createId())
      .references(() => country.id),
    userId: varchar({
      length: 24,
    })
      .$defaultFn(() => createId())
      .references(() => user.id)
      .notNull(),

    title: varchar().notNull(),
    addressLine1: varchar().notNull(),
    addressLine2: varchar(),
    city: varchar().notNull(),
    postalCode: varchar().notNull(),
    phone: varchar().notNull(),

    defaulted: boolean().default(false).notNull(),

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
    index("address_country_id_idx").on(table.countryId),
    index("address_user_id_idx").on(table.userId),
  ],
);

export const addressRelations = relations(address, ({ one }) => ({
  country: one(country, {
    fields: [address.userId],
    references: [country.id],
  }),
  user: one(user, {
    fields: [address.userId],
    references: [user.id],
  }),
}));

export type Address = typeof address.$inferSelect;

export type CreateAddress = typeof address.$inferInsert;
