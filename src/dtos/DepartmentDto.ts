interface Department {
  id: number;
  full_name: string;
  short_name: string;
  organization_id: number;
  createt_at: string;
}

class DepartmentDTO {
  id!: number;
  fullName!: string;
  shortName!: string;
  organizationId!: number;

  constructor(data: Department) {
    this.id = data.id;
    this.fullName = data.full_name;
    this.shortName = data.short_name;
    this.organizationId = data.organization_id;
  }
}

export default DepartmentDTO;
