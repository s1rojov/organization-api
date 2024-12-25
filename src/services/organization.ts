import pool from "@/config/database";
import OrganizationDTO from "@/dtos/OrganizationDto";

async function GetList(): Promise<OrganizationDTO[]> {
  const query: string = `
        SELECT
            id 
            full_name
            short_name
            status
        FROM organization`;
  try {
    const result: any = await pool.query;
    return result.rows.map((row: any) => new OrganizationDTO(row));
  } catch (error) {
    throw error;
  }
}

export default GetList;
