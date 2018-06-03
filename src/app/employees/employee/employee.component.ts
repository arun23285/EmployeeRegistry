import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {EmployeeService} from '../shared/employee.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeService : EmployeeService, public toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if (form != null)
form.reset();
this.employeeService.selectedEmployee = {

  EmployeeID: 1,
  FirstName: '',
  LastName: '',
  EmpCode: '',
  Position: '',
  Office: ''


}

  }

  onSubmit(form : NgForm){

    this.employeeService.postEmployee(form.value)
    .subscribe( data =>{

      this.resetForm(form);
      this.toastr.success('New Record Added Succcessfully', 'Employee Register');
    })

  }
}
