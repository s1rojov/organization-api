import { Pool } from "pg";
const pool: any = new Pool({
  user: "postgres",
  host: "localhost",
  database: "organization",
  password: "123",
  port: 5432,
});

export default pool;
