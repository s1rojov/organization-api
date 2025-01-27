interface Faculty {
  id: number;
  full_name: string;
  short_name: string;
  organization_id: number;
  createt_at: string;
  organization_name?: string;
  organization_status?: boolean;
}

class FacultyDTO {
  id!: number;
  fullName!: string;
  shortName!: string;
  organizationId!: number;
  organizationName?: string;
  organizationStatus?: boolean;

  constructor(data: Faculty) {
    this.id = data.id;
    this.fullName = data.full_name;
    this.shortName = data.short_name;
    this.organizationId = data.organization_id;
    this.organizationName = data.organization_name;
    this.organizationStatus = data.organization_status;
  }
}

export default FacultyDTO;
