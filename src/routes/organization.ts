import express from "express";
import {
  GetOrganizations,
  CreateOrganizations,
  UpdateOrganizations,
  DeleteOrganizations,
} from "../controllers/organization";

const orgRouter = express.Router();
orgRouter.get("/GetList", GetOrganizations);
orgRouter.post("/Create", CreateOrganizations);
orgRouter.patch("/Update", UpdateOrganizations);
orgRouter.delete("/Delete", DeleteOrganizations);

export default orgRouter;
