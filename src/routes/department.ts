import express from "express";
import {
  GetDepartments,
  CreateDepartment,
  UpdateDepartment,
  DeleteDepartment,
} from "../controllers/department";
const departmentRouter = express.Router();

departmentRouter.get("/GetList", GetDepartments);
departmentRouter.post("/Create", CreateDepartment);
departmentRouter.patch("/Update", UpdateDepartment);
departmentRouter.delete("/Delete", DeleteDepartment);

export default departmentRouter;
