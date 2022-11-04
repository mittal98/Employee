import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { EmployeeFormService } from './employee-form.service';
import { EmployeeService } from './employee.service';

import { CurrencyPipe } from './pipe/currency.pipe';




@NgModule({
  declarations: [

    CurrencyPipe
  ],
  imports: [
    CommonModule,
    OverlayModule
  ],
  exports:[
  
    CurrencyPipe
  ],
  providers:[EmployeeFormService,
  EmployeeService]
})
export class SharedModule { }
