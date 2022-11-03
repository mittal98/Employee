import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/employee.service';
import { RefreshDataService } from 'src/app/shared/refresh-data.service';
import { employee } from '../employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  public employeeForm: FormGroup
  public Data: any;
  public isSubmitted: boolean = false;
  constructor(private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private refreshData: RefreshDataService) { this.employeeForm = new FormGroup(''); }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group(
      {
        id: [''],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.required],
        mobileNo: ['', Validators.required],
        salary: ['']
      }
    )
    console.log(this.employeeForm);
    this.Data= [];
   
  }
  // formcontrol
  get FormControls(): { [key: string]: AbstractControl } {
    return this.employeeForm.controls
  }
  onSave() {
    this.isSubmitted = true;
    this.addEmployee();
  }
  addEmployee() {
    this.employeeService.addEmployee(this.employeeForm.value).subscribe((data: employee) => {
     this.refreshData.refreshEmployee(data);   
    }
    )
  }
  getEmployee():void{
    this.employeeService.getEmployee().subscribe((data:employee[]) => {
      this.Data = data ;
    })
  }
}
