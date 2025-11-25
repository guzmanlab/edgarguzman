import { init } from "@paralleldrive/cuid2";
import { pgTable, primaryKey, timestamp, varchar } from "drizzle-orm/pg-core";

const createId = init({
  length: 24,
});

export const verificationToken = pgTable(
  "verification_tokens",
  {
    id: varchar()
      .primaryKey()
      .$defaultFn(() => createId()),

    identifier: varchar().notNull(),
    value: varchar().notNull(),
    expiresAt: timestamp({
      withTimezone: true,
    }).notNull(),

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
    primaryKey({
      columns: [table.identifier, table.value],
    }),
  ],
);

export type VerificationToken = typeof verificationToken.$inferSelect;

export type CreateVerificationToken = typeof verificationToken.$inferInsert;
