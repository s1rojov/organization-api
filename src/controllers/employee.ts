import { Request, Response } from "express";
import { GetList, Create, Update, Delete } from "../services/employee";

export async function GetEmployees(req: Request, res: Response): Promise<void> {
  try {
    const items = await GetList();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).send("Error fetching employees");
  }
}

export async function CreateEmployee(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const item = await Create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).send("Error creating");
  }
}

export async function UpdateEmployee(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const item = await Update(req.body);
    res.status(200).json(item);
  } catch (error: any) {
    console.error("Error updating:", error);
    res.status(500).send(error.message || "Error updating");
  }
}

export async function DeleteEmployee(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const item = await Delete(req.body.id);
    res.status(200).json(item ? "Deleted successfully" : "Error");
  } catch (error: any) {
    console.error("Error deleting:", error);
    res.status(500).send(error.message || "Error deleting");
  }
}
