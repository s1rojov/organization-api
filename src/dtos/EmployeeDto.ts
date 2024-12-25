// src/dtos/EmployeeDTO.ts

interface Employee {
  id: number;
  first_name: string;
  middle_name: string;
  last_name: string;
  kafedra_id: number;
  department_id: number;
  rate: number;
}

class EmployeeDTO {
  id: number;
  firstName!: string;
  lastName!: string;
  middleName!: string;
  kafedraId!: number;
  departmentId!: number;
  rate!: number;

  constructor(data: Employee) {
    this.id = data.id;
    this.firstName = data.first_name;
    this.lastName = data.last_name;
    this.middleName = data.middle_name;
    this.kafedraId = data.kafedra_id;
    this.departmentId = data.department_id;
    this.rate = data.rate;
  }
}

export default EmployeeDTO;
