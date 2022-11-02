import { Component, OnInit } from '@angular/core';
import { EmployeeFormService } from 'src/app/shared/employee-form.service';
import { EmployeeService } from 'src/app/shared/employee.service';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { employee } from '../employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  public employeeData: employee[]
  constructor(
    private employeeFormService: EmployeeFormService,
    private employeeService: EmployeeService) { this.employeeData = [] }

  ngOnInit(): void {
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
}
