import { text, timestamp, pgTable, pgEnum } from "drizzle-orm/pg-core";
import { createId } from '@paralleldrive/cuid2'

export const userRoleEnum = pgEnum('user_role', ['customer'])

export const user = pgTable("users", {
  id: text("id").$defaultFn(() => createId()).primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  role: userRoleEnum("role").default('customer'),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});