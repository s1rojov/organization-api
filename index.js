import express from "express";
import dotenv from "dotenv";
import router from "./src/routes/index.js";
const app = express();

dotenv.config();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Project is running on port ${PORT}`);
});
