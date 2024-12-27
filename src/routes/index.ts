import express from "express";
import orgRouter from "./organization";

const router = express.Router();

router.use("/organization", orgRouter);

export default router;
