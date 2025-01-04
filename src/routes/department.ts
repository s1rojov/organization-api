import express from "express";
import { GetDepartments } from "../controllers/department";
const departmentRouter = express.Router();

departmentRouter.get("/GetList", GetDepartments);

export default departmentRouter;
