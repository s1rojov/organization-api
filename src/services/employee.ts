import pool from "../config/database";
import EmployeeDTO from "../dtos/EmployeeDto";

async function GetList(): Promise<EmployeeDTO[]> {
  const query: string = `
    select 
	    e.id, 
	    e.first_name, 
	    e.middle_name, 
	    e.last_name, 
	    k.full_name as kafedra_name, 
	    k.id as kafedra_id,
	    d.full_name as department_name,
	    d.id as department_id,
		e.rate
	    from employee e
	    left join kafedra k on e.kafedra_id = k.id
	    left join department d on e.department_id = d.id
  `;
  try {
    const result: any = await pool.query(query);
    return result.rows.map((row: any) => new EmployeeDTO(row));
  } catch (error) {
    throw error;
  }
}

async function Create(data: EmployeeDTO): Promise<EmployeeDTO> {
  const query = `
    INSERT INTO employee (first_name, middle_name, last_name,kafedra_id, department_id, rate )
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;

  try {
    const result: any = await pool.query(query, [
      data.firstName,
      data.middleName,
      data.lastName,
      data.kafedraId,
      data.departmentId,
      data.rate,
    ]);
    return new EmployeeDTO(result.rows[0]);
  } catch (error) {
    throw error;
  }
}

async function Update(data: Partial<EmployeeDTO>): Promise<EmployeeDTO> {
  if (!data.id) {
    throw new Error("Missing 'id' in the update data");
  }

  const query = `
    UPDATE employee
    SET
  	first_name = COALESCE($1, first_name), 
	middle_name = COALESCE($2, middle_name), 
	last_name = COALESCE($3, last_name),
	kafedra_id = COALESCE($4, kafedra_id), 
	department_id = COALESCE($5, department_id), 
	rate = COALESCE($6, rate)
    WHERE id = $7
    RETURNING *;
  `;

  try {
    const result: any = await pool.query(query, [
      data.firstName,
      data.middleName,
      data.lastName,
      data.kafedraId,
      data.departmentId,
      data.rate,
      data.id,
    ]);

    if (result.rows.length === 0) {
      throw new Error(`Employee with id ${data.id} not found`);
    }

    return new EmployeeDTO(result.rows[0]);
  } catch (error) {
    console.error("Error updating employee:", error);
    throw error;
  }
}

async function Delete(id: number): Promise<boolean> {
  const query = `
    DELETE FROM employee
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
