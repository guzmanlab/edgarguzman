import { init } from "@paralleldrive/cuid2";
import { relations } from "drizzle-orm";
import { index, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

import { user } from "@drizzle/schema/user";

const createId = init({
  length: 24,
});

export const customer = pgTable(
  "customers",
  {
    id: varchar()
      .primaryKey()
      .$defaultFn(() => createId()),
    userId: varchar()
      .$defaultFn(() => createId())
      .references(() => user.id)
      .notNull(),

    name: varchar().notNull(),
    email: varchar().notNull().unique(),
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
    index("customer_user_id_idx").on(table.userId),
    index("customer_name_idx").on(table.name),
    index("customer_email_idx").on(table.email),
  ],
);

export const customerRelations = relations(customer, ({ one }) => ({
  user: one(user, {
    fields: [customer.userId],
    references: [user.id],
  }),
}));

export type Customer = typeof customer.$inferSelect;

export type CreateCustomer = typeof customer.$inferInsert;
