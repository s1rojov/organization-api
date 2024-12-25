interface Kafedra {
  id: number;
  full_name: string;
  short_name: string;
  faculty_id: number;
  createt_at: string;
}

class FacultyDTO {
  id!: number;
  fullName!: string;
  shortName!: string;
  facultyId!: number;

  constructor(data: Kafedra) {
    this.id = data.id;
    this.fullName = data.full_name;
    this.shortName = data.short_name;
    this.facultyId = data.faculty_id;
  }
}

export default FacultyDTO;
