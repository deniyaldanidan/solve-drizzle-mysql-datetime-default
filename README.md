# Solution for defaultNow() timezone problem in drizzle-mysql

**schema.ts**

```typescript
import { sql } from "drizzle-orm";
import { int, mysqlTable, varchar, timestamp } from "drizzle-orm/mysql-core";

export const groceries = mysqlTable("groceries", {
  id: int("id").primaryKey().autoincrement().notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  createdAt: int("createdAt")
    .notNull()
    .default(sql`(unix_timestamp())`),
});
```

Will create a default time as `UNIX TIMESTAMP` which we can retrieve later using `new Date(timestamp * 1000)`;

**.env structure**

```text
DB_HOST = "host_name"
DB_NAME = "database_name"
DB_USER = "db_username"
DB_PWD = "db_password"
```
