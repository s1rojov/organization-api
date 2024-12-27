import { Request, Response } from "express";
// import GetList from "@/services/organization";
import GetList from "../services/organization";

export async function fetchOrganizations(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const organizations = await GetList();
    res.status(200).json(organizations);
  } catch (error) {
    res.status(500).send("Error fetching organizations");
  }
}
