import { Pool } from "pg";

const { DB_USER, DB_HOST, DB_DATABASE, DB_PASSWORD, DB_PORT }: any =
  process.env;
const pool = new Pool({
  user: DB_USER,
  host: DB_HOST,
  database: DB_DATABASE,
  password: DB_PASSWORD,
  port: DB_PORT,
});

export default pool;