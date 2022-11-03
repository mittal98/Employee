import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { employee } from '../employee/employee.model';

@Injectable({
  providedIn: 'root'
})
export class RefreshDataService {
  getEmployee(data: employee) {
    throw new Error('Method not implemented.');
  }
public refreshData$:Observable<employee>;
private refreshData:Subject<employee>;
  constructor() { 
    this.refreshData=new Subject();
    this.refreshData$=this.refreshData.asObservable();
  }
refreshEmployee(employee:employee){
    this.refreshData.next(employee);
  }
}
