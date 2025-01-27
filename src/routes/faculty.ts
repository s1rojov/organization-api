import express from "express";
import {
  GetFaculty,
  CreateFaculty,
  UpdateFaculty,
  DeleteFaculty,
} from "../controllers/faculty";
const facultyRouter = express.Router();

facultyRouter.get("/GetList", GetFaculty);
facultyRouter.post("/Create", CreateFaculty);
facultyRouter.patch("/Update", UpdateFaculty);
facultyRouter.delete("/Delete", DeleteFaculty);

export default facultyRouter;
