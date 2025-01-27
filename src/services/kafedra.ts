import pool from "../config/database";
import KafedraDTO from "../dtos/KafedraDto";

async function GetList(): Promise<KafedraDTO[]> {
  const query: string = `
    SELECT 
        kafedra.id,
        kafedra.full_name,
        kafedra.short_name, 
        faculty.full_name AS faculty_name
        FROM kafedra  
        INNER JOIN faculty 
        ON kafedra.faculty_id=faculty.id
  `;
  try {
    const result: any = await pool.query(query);
    return result.rows.map((row: any) => new KafedraDTO(row));
  } catch (error) {
    throw error;
  }
}

async function Create(data: KafedraDTO): Promise<KafedraDTO> {
  const query = `
    INSERT INTO kafedra (full_name, short_name, faculty_id)
    VALUES ($1, $2, $3)
    RETURNING id, full_name, short_name, faculty_id;
  `;
  try {
    const result: any = await pool.query(query, [
      data.fullName,
      data.shortName,
      data.facultyId,
    ]);
    return new KafedraDTO(result.rows[0]);
  } catch (error) {
    throw error;
  }
}
async function Update(data: Partial<KafedraDTO>): Promise<KafedraDTO> {
  if (!data.id) {
    throw new Error("Missing 'id' in the update data");
  }

  const query = `
    UPDATE kafedra
    SET
      full_name = COALESCE($1, full_name),
      short_name = COALESCE($2, short_name),
      faculty_id = COALESCE($3, faculty_id)
    WHERE id = $4
    RETURNING id, full_name, short_name, faculty_id;
  `;

  try {
    const result: any = await pool.query(query, [
      data.fullName,
      data.shortName,
      data.facultyId,
      data.id,
    ]);

    if (result.rows.length === 0) {
      throw new Error(`Kafedra with id ${data.id} not found`);
    }

    return new KafedraDTO(result.rows[0]);
  } catch (error) {
    console.error("Error updating Kafedra:", error);
    throw error;
  }
}

async function Delete(id: number): Promise<boolean> {
  const query = `
    DELETE FROM kafedra
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
