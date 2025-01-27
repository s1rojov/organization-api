interface Kafedra {
  id: number;
  full_name: string;
  short_name: string;
  faculty_id: number;
  faculty_name: string;
  createt_at: string;
}

class KafedraDTO {
  id!: number;
  fullName!: string;
  shortName!: string;
  facultyName: string;
  facultyId!: number;

  constructor(data: Kafedra) {
    this.id = data.id;
    this.fullName = data.full_name;
    this.shortName = data.short_name;
    this.facultyId = data.faculty_id;
    this.facultyName = data.faculty_name;
  }
}

export default KafedraDTO;
