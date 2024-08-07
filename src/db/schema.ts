import { sql } from "drizzle-orm";
import { int, mysqlTable, varchar, timestamp } from "drizzle-orm/mysql-core";

export const groceries = mysqlTable("groceries", {
  id: int("id").primaryKey().autoincrement().notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  timestamp1: timestamp("timestamp1", { mode: "date" }).defaultNow().notNull(),
  timestamp2: timestamp("timestamp2", { mode: "string" })
    .notNull()
    .default(sql`now()`),
  timestamp3: int("timestamp3")
    .notNull()
    .default(sql`(unix_timestamp())`),
});
