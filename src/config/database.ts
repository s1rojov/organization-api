import { Pool } from "pg";
const pool: any = new Pool({
  user: "koyeb",
  host: "ep-lingering-cloud-a2t040wd.eu-central-1.pg.koyeb.app",
  database: "koyebdb",
  password: "npg_RnbokFOG4j8V",
  port: 5432,
  ssl: { rejectUnauthorized: false },
});

pool
  .connect()
  .then(() => console.log("PostgreSQL database connected! ✅"))
  .catch((err: any) => console.error("Database connection error ❌", err));

export default pool;
