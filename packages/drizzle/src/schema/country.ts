import { init } from "@paralleldrive/cuid2";
import { relations } from "drizzle-orm";
import { index, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

import { user } from "@drizzle/schema/user";

const createId = init({
  length: 24,
});

export const country = pgTable(
  "countries",
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
    key: varchar().notNull(),

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
    index("country_user_id_idx").on(table.userId),
    index("country_title_idx").on(table.title),
  ],
);

export const countryRelations = relations(country, ({ one }) => ({
  user: one(user, {
    fields: [country.userId],
    references: [user.id],
  }),
}));

export type Country = typeof country.$inferSelect;

export type CreateCountry = typeof country.$inferInsert;
