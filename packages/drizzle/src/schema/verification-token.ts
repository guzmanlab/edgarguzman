import { init } from "@paralleldrive/cuid2";
import { pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

const createId = init({
  length: 24,
});

export const verificationToken = pgTable(
  "verification_tokens",
  {
    id: varchar()
      .primaryKey()
      .$defaultFn(() => createId()),

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
  () => [
    // TODO: add the following 'primary key' function later
  ],
);

export type VerificationToken = typeof verificationToken.$inferSelect;

export type CreateVerificationToken = typeof verificationToken.$inferInsert;
