import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { employee } from '../employee/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public baseUrl: any;
  constructor(private http: HttpClient) { // baseurl
    this.baseUrl = "http://localhost:3000/employeeData/";
  }
  //get method
  getEmployee(): Observable<employee[]> {
    const url: string = this.baseUrl;
    return this.http.get<employee[]>(url)
  }
  // delete method
  deleteEmployee(id: number): Observable<any> {
    const url: string = this.baseUrl + id;
    return this.http.delete(url)
  }
  // post method
  addEmployee(employeeData: employee): Observable<employee> {
    const url: string = this.baseUrl;
    return this.http.post<employee>(url, employeeData)
  }
  // get by id
  getEmployeeById(id: number): Observable<any> {
    const url: string = this.baseUrl + id;
    return this.http.get<employee>(url)
  }
  // put method
  updateEmployee(employeeData: employee, id: number): Observable<any> {
    const url: string = this.baseUrl + id;
    return this.http.put<employee>(url, employeeData)
  }
}

