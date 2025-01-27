import { Request, Response } from "express";
import { GetList, Create, Update, Delete } from "../services/kafedra";

export async function GetKafedra(req: Request, res: Response): Promise<void> {
  try {
    const items = await GetList();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).send("Error fetching kafedra");
  }
}

export async function CreateKafedra(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const item = await Create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).send("Error creating kafedra");
  }
}

export async function UpdateKafedra(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const item = await Update(req.body);
    res.status(200).json(item);
  } catch (error: any) {
    console.error("Error updating kafedra:", error);
    res.status(500).send(error.message || "Error updating kafedra");
  }
}

export async function DeleteKafedra(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const item = await Delete(req.body.id);
    res.status(200).json(item ? "Deleted successfully" : "Error");
  } catch (error: any) {
    console.error("Error deleting department:", error);
    res.status(500).send(error.message || "Error deleting kafedra");
  }
}
