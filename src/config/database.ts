import { Pool } from "pg";
const pool: any = new Pool({
  user: "koyeb-adm",
  host: "ep-still-bush-a2z3hbxu.eu-central-1.pg.koyeb.app",
  database: "koyebdb",
  password: "npg_28RGpWVemXqb",
  port: 8000,
  // ssl: true,
});

export default pool;
