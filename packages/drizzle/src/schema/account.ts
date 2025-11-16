import { init } from "@paralleldrive/cuid2";
import { relations } from "drizzle-orm";
import { index, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

import { user } from "@drizzle/schema/user";

const createId = init({
  length: 24,
});

export const account = pgTable(
  "accounts",
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

    // TODO: add the following columns later

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
    // TODO: add the following 'primary key' function later
    index("account_user_id_idx").on(table.userId),
  ],
);

export const accountRelations = relations(account, ({ one }) => ({
  user: one(user, {
    fields: [account.userId],
    references: [user.id],
  }),
}));

export type Account = typeof account.$inferSelect;

export type CreateAccount = typeof account.$inferInsert;
