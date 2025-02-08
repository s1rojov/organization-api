import express from "express";
import {
  GetEmployees,
  CreateEmployee,
  UpdateEmployee,
  DeleteEmployee,
} from "../controllers/employee";
const employeeRouter = express.Router();

employeeRouter.get("/GetList", GetEmployees);
employeeRouter.post("/Create", CreateEmployee);
employeeRouter.patch("/Update", UpdateEmployee);
employeeRouter.delete("/Delete", DeleteEmployee);

export default employeeRouter;
