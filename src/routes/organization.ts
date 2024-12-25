import express from "express";
import { fetchOrganizations } from "@/controllers/organization";

const orgRouter = express.Router();
orgRouter.get("/GetList", fetchOrganizations);

export default orgRouter;
