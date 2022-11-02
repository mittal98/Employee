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
}
