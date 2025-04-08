import { Pool } from "pg";
const pool: any = new Pool({
  user: "postgres",
  host: "localhost",
  database: "organization",
  password: "123",
  port: 5432,
});

pool
  .connect()
  .then(() => console.log("PostgreSQL database connected! ✅"))
  .catch((err: any) => console.error("Database connection error ❌", err));

export default pool;
