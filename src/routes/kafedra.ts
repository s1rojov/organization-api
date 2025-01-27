import express from "express";
import {
  GetKafedra,
  CreateKafedra,
  UpdateKafedra,
  DeleteKafedra,
} from "../controllers/kafedra";
const kafedraRouter = express.Router();

kafedraRouter.get("/GetList", GetKafedra);
kafedraRouter.post("/Create", CreateKafedra);
kafedraRouter.patch("/Update", UpdateKafedra);
kafedraRouter.delete("/Delete", DeleteKafedra);

export default kafedraRouter;
