import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod} from '@angular/http';
import { Observable, of } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';


import {Employee} from './employee.model'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  selectedEmployee : Employee;
  constructor(public http: Http) { }

  postEmployee(emp : Employee){
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post('http://employeeregistry.azurewebsites.net/api/Employee',body,requestOptions).pipe(map(x => x.json()));
  }
}
