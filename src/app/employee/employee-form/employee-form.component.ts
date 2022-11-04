import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  public data: employee[];
  public isSubmitted: boolean = false;
  public employeeId: any;
  public title: string = "";


  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private refreshData: RefreshDataService,
    private activatedRoute: ActivatedRoute) {

    this.employeeForm = new FormGroup('');
    this.data = [];
    this.employeeId = '';
  }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group(
      {
        id: [''],
        firstName: ['', Validators.required, Validators.minLength(3)],
        lastName: ['', Validators.required, Validators.minLength(3)],
        email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        mobileNo: ['', Validators.required, Validators.pattern("^[0-9]*$"),
          Validators.minLength(10), Validators.maxLength(10)],
        salary: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]]
      }
    )

    // edit data
    this.activatedRoute.data.subscribe((Response) => {
      this.employeeForm.patchValue(Response['data']);
      this.employeeId = Response['data']?.id
    });
    this.title = this.employeeId ? 'EDIT EMPLOYEE' : 'ADD EMPLOYEE';
  }
  // formcontrol
  get FormControls(): { [key: string]: AbstractControl } {
    return this.employeeForm.controls
  }
  onSave() {
    this.isSubmitted = true;
    if (this.employeeId) {
      this.updateEmployee();
    } else {
      this.addEmployee()
    };
  }
  addEmployee() {
    this.employeeService.addEmployee(this.employeeForm.value).subscribe((data: employee) => {
      this.refreshData.refreshEmployee(data);
    }
    )
  }
  getEmployee(): void {
    this.employeeService.getEmployee().subscribe((data: employee[]) => {
      this.data = data;
    })
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.employeeForm.value, this.employeeId).subscribe(result => {
      this.refreshData.getEmployee(result);
    })
  }
}
