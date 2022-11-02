import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { EmployeeFormService } from './employee-form.service';
import { EmployeeService } from './employee.service';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OverlayModule
  ],
  providers:[EmployeeFormService,
  EmployeeService]
})
export class SharedModule { }
