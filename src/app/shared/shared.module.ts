import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { EmployeeFormService } from './employee-form.service';
import { EmployeeService } from './employee.service';
import { NamePipe } from './pipe/name.pipe';
import { CurrencyPipe } from './pipe/currency.pipe';




@NgModule({
  declarations: [
    NamePipe,
    CurrencyPipe
  ],
  imports: [
    CommonModule,
    OverlayModule
  ],
  exports:[
    NamePipe,
    CurrencyPipe
  ],
  providers:[EmployeeFormService,
  EmployeeService]
})
export class SharedModule { }
