interface Faculty {
  id: number;
  full_name: string;
  short_name: string;
  organization_id: number;
  createt_at: string;
}

class FacultyDTO {
  id!: number;
  fullName!: string;
  shortName!: string;
  organizationId!: number;

  constructor(data: Faculty) {
    this.id = data.id;
    this.fullName = data.full_name;
    this.shortName = data.short_name;
    this.organizationId = data.organization_id;
  }
}

export default FacultyDTO;
