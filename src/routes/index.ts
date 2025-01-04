import express from "express";
import orgRouter from "./organization";
import departmentRouter from "./department";

const router = express.Router();

router.use("/organization", orgRouter);
router.use("/department", departmentRouter);

export default router;
