import { Request, Response } from "express";
import { GetList } from "../services/department";

export async function GetDepartments(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const items = await GetList();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).send("Error fetching departments");
  }
}
