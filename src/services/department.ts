import pool from "../config/database";
import DepartmentDTO from "../dtos/DepartmentDto";

async function GetList(): Promise<DepartmentDTO[]> {
  const query: string = `
    SELECT 
        department.id,
        department.full_name,
        department.short_name, 
        organization.full_name AS organization_name, 
        organization.status AS organization_status  
        FROM department  
        INNER JOIN organization 
        ON department.organization_id=organization.id
  `;
  try {
    const result: any = await pool.query(query);
    return result.rows.map((row: any) => new DepartmentDTO(row));
  } catch (error) {
    throw error;
  }
}

async function Create(data: DepartmentDTO): Promise<DepartmentDTO> {
  const query = `
    INSERT INTO department (full_name, short_name, organization_id)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;
  try {
    const result: any = await pool.query(query, [
      data.fullName,
      data.shortName,
      data.organizationId,
    ]);
    return new DepartmentDTO(result.rows[0]);
  } catch (error) {
    throw error;
  }
}
async function Update(data: Partial<DepartmentDTO>): Promise<DepartmentDTO> {
  if (!data.id) {
    throw new Error("Missing 'id' in the update data");
  }

  const query = `
    UPDATE department
    SET
      full_name = COALESCE($1, full_name),
      short_name = COALESCE($2, short_name),
      organization_id = COALESCE($3, organization_id)
    WHERE id = $4
    RETURNING id, full_name, short_name, organization_id;
  `;

  try {
    const result: any = await pool.query(query, [
      data.fullName,
      data.shortName,
      data.organizationId,
      data.id,
    ]);

    if (result.rows.length === 0) {
      throw new Error(`Department with id ${data.id} not found`);
    }

    return new DepartmentDTO(result.rows[0]);
  } catch (error) {
    console.error("Error updating department:", error);
    throw error;
  }
}

async function Delete(id: number): Promise<boolean> {
  const query = `
    DELETE FROM department
    WHERE id = $1;
  `;
  try {
    const result: any = await pool.query(query, [id]);
    return result.rowCount > 0;
  } catch (error) {
    throw error;
  }
}

export { GetList, Create, Update, Delete };
