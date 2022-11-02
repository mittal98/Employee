import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { EmployeeService } from '../shared/employee.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeFormComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule, 
    SharedModule,
    HttpClientModule
  ],
  providers:[
    EmployeeService
  ]
})
export class EmployeeModule { }
