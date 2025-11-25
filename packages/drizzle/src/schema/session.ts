import { init } from "@paralleldrive/cuid2";
import { relations } from "drizzle-orm";
import { index, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

import { user } from "@drizzle/schema/user";

const createId = init({
  length: 24,
});

export const session = pgTable(
  "sessions",
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

    token: varchar().notNull(),
    expiresAt: timestamp({
      withTimezone: true,
    }).notNull(),
    ipAddress: varchar().notNull(),
    userAgent: varchar().notNull(),

    createdAt: timestamp({
      withTimezone: true,
    })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp({
      withTimezone: true,
    }).$onUpdateFn(() => new Date()),
  },
  (table) => [index("session_user_id_idx").on(table.userId)],
);

export const sessionRelations = relations(session, ({ one }) => ({
  user: one(user, {
    fields: [session.id],
    references: [user.id],
  }),
}));

export type Session = typeof session.$inferSelect;

export type CreateSession = typeof session.$inferInsert;
