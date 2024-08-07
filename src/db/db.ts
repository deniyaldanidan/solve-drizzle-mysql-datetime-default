import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const connection = mysql.createPool({
  host: process.env.DB_HOST ?? "",
  database: process.env.DB_NAME ?? "",
  user: process.env.DB_USER ?? "",
  password: process.env.DB_PWD ?? "",
  port: 3306,
});

const db = drizzle(connection);

export default db;
