import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  public employeeForm: FormGroup
  public isSubmitted: boolean = false;
  constructor(private formBuilder: FormBuilder,) { this.employeeForm = new FormGroup(''); }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group(
      {
        id: [''],
        companyName: ['', Validators.required],
        CompanyDescription: ['', Validators.required],
        SelectTag: ['', Validators.required],
        SelectLogo: ['', Validators.required],
        companyPath: []
      }
    )
    console.log(this.employeeForm);

  }
  // formcontrol
  get FormControls(): { [key: string]: AbstractControl } {
    return this.employeeForm.controls
  }
}
