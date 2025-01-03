import { Request, Response } from "express";
import { GetList, Create, Update, Delete } from "../services/organization";
// import OrganizationDTO from "../dtos/OrganizationDto";

export async function GetOrganizations(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const items = await GetList();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).send("Error fetching organizations");
  }
}

export async function CreateOrganizations(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const item = await Create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).send("Error creating organizations");
  }
}

export async function UpdateOrganizations(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const item = await Update(req.body);
    res.status(200).json(item);
  } catch (error: any) {
    console.error("Error updating organization:", error);
    res.status(500).send(error.message || "Error updating organizations");
  }
}

export async function DeleteOrganizations(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const item = await Delete(req.body.id);
    res.status(200).json(item ? "Deleted successfully" : "Error");
  } catch (error: any) {
    console.error("Error updating organization:", error);
    res.status(500).send(error.message || "Error updating organizations");
  }
}
