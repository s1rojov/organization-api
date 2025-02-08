import express from "express";
import orgRouter from "./organization";
import departmentRouter from "./department";
import facultyRouter from "./faculty";
import kafedraRouter from "./kafedra";
import employeeRouter from "./employee";

const router = express.Router();

router.use("/organization", orgRouter);
router.use("/department", departmentRouter);
router.use("/faculty", facultyRouter);
router.use("/kafedra", kafedraRouter);
router.use("/employee", employeeRouter);

export default router;
