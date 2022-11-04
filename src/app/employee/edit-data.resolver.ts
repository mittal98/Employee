import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { EmployeeService } from '../shared/employee.service';
import { employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EditDataResolver implements Resolve<employee> {
  constructor(private http:EmployeeService){

  }
  resolve(route: ActivatedRouteSnapshot): Observable<employee> {
   const id=route.params['id'];
   console.log('employee Id', id);
   return this.http.getEmployeeById(id);
  }
}
