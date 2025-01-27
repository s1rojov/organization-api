// src/dtos/EmployeeDTO.ts

interface Employee {
  id: number;
  first_name: string;
  middle_name: string;
  last_name: string;
  kafedra_id: number;
  kafedra_name: string;
  department_id: number;
  department_name: string;
  rate: number;
}

class EmployeeDTO {
  id: number;
  firstName!: string;
  lastName!: string;
  middleName!: string;
  kafedraId!: number;
  kafedraName!:string | null
  departmentId!: number;
  departmentName!: string| null
  rate!: number;

  constructor(data: Employee) {
    this.id = data.id;
    this.firstName = data.first_name;
    this.lastName = data.last_name;
    this.middleName = data.middle_name;
    this.kafedraId = data.kafedra_id;
    this.kafedraName = data.kafedra_name
    this.departmentId = data.department_id;
    this.departmentName = data.department_name
    this.rate = data.rate;
  }
}

export default EmployeeDTO;
