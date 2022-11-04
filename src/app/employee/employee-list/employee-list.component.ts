import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { EmployeeFormService } from 'src/app/shared/employee-form.service';
import { EmployeeService } from 'src/app/shared/employee.service';
import { RefreshDataService } from 'src/app/shared/refresh-data.service';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { employee } from '../employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  public employeeData: employee[];
  constructor(
    private employeeFormService: EmployeeFormService,
    private employeeService: EmployeeService,
    private refreshData: RefreshDataService,
    private router: Router) {
    this.employeeData = []
  }

  ngOnInit(): void {
    this.refreshData.refreshData$.subscribe((data: any) => {
      if (data) {
        this.getEmployeeData();
        // console.log(this.getEmployeeData);
      }
    })
    this.getEmployeeData()
  }
  addEmployee() {
    this.employeeFormService.open(EmployeeFormComponent)
  }
  // get
  getEmployeeData() {
    this.employeeService.getEmployee().subscribe(data => {
      this.employeeData = data
    })
  }

  editEmployee(employee:employee):void {
    this.router.navigate(['employee/edit',employee.id])
  }
  
  
}
