interface Organization {
  id: number;
  full_name: string;
  short_name: string;
  status: boolean;
  createt_at: string;
}

class OrganizationDTO {
  id!: number;
  fullName!: string;
  shortName!: string;
  status!: boolean;

  constructor(data: Organization) {
    this.id = data.id;
    this.fullName = data.full_name;
    this.shortName = data.short_name;
    this.status = data.status;
  }
}

export default OrganizationDTO;
