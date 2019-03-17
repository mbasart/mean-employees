import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  selectedEmployee: Employee;
  employees: Employee[];
  readonly URL_API = 'http://localhost:3000/api/employees';
  http: any;

  constructor(private htpp: HttpClient) { 
    //this.selectedEmployee = new Employee(); //EM DONA ERROR!!
  }

  getEmployees() {
    return this.http.get(this.URL_API);
  }

  postEmployee(Employee: Employee){
    return this.htpp.post(this.URL_API, Employee);
  }

  putEmployee(employee: Employee){
    return this.http.put(this.URL_API + `/${employee._id}`, employee);
  }

  deleteEmployee(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
