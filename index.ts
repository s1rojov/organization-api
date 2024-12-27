import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import router from "./src/routes/index";
const app: Express = express();
const PORT = 4000;

dotenv.config();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Project is running on port ${PORT}`);
});
