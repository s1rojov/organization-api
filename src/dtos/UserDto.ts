interface User {
  id: number;
  login: string;
  password: string;
  employee_id: number;
  createt_at: string;
}

class UserDTO {
  id!: number;
  login!: string;
  password!: string;
  employeeId!: number;

  constructor(data: User) {
    this.id = data.id;
    this.login = data.login;
    this.password = data.password;
    this.employeeId = data.employee_id;
  }
}

export default UserDTO;
