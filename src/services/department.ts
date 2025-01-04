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

// async function Create(data: DepartmentDTO): Promise<DepartmentDTO> {
//   const query = `
//     INSERT INTO organization (full_name, short_name, status)
//     VALUES ($1, $2, $3)
//     RETURNING id, full_name, short_name, status;
//   `;
//   try {
//     const result: any = await pool.query(query, [
//       data.fullName,
//       data.shortName,
//     ]);
//     return new DepartmentDTO(result.rows[0]);
//   } catch (error) {
//     throw error;
//   }
// }
// async function Update(
//   data: Partial<OrganizationDTO>
// ): Promise<OrganizationDTO> {
//   if (!data.id) {
//     throw new Error("Missing 'id' in the update data");
//   }

//   const query = `
//     UPDATE organization
//     SET
//       full_name = COALESCE($1, full_name),
//       short_name = COALESCE($2, short_name),
//       status = COALESCE($3, status)
//     WHERE id = $4
//     RETURNING id, full_name, short_name, status;
//   `;

//   try {
//     const result: any = await pool.query(query, [
//       data.fullName,
//       data.shortName,
//       data.status,
//       data.id,
//     ]);

//     if (result.rows.length === 0) {
//       throw new Error(`Organization with id ${data.id} not found`);
//     }

//     return new OrganizationDTO(result.rows[0]);
//   } catch (error) {
//     console.error("Error updating organization:", error);
//     throw error;
//   }
// }

// async function Delete(id: number): Promise<boolean> {
//   const query = `
//     DELETE FROM organization
//     WHERE id = $1;
//   `;
//   try {
//     const result: any = await pool.query(query, [id]);
//     return result.rowCount > 0;
//   } catch (error) {
//     throw error;
//   }
// }

export { GetList };
