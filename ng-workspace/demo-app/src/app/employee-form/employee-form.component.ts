import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators,AbstractControlOptions } from '@angular/forms';
import {rangeVlidators ,emailMatchValidator} from '../my-valaditor'
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employeeFormGroup:FormGroup;

  empRecord: any ={
    firstName:'',
    lastName:'',
    email:'sanjeevsham@gmail.com',
    mobile:'1234567890'
  }
  constructor(private fb:FormBuilder) { 
    this.employeeFormGroup= this.fb.group({
      firstName:[this.empRecord.firstName,[Validators.required,Validators.minLength(3)]],
      lastName:[this.empRecord.lastName],
      emailGroup:this.fb.group({
        email:[this.empRecord.email,[Validators.required,Validators.email]],
        confirmEmail:['',[Validators.required,Validators.email]]
      },{validators:emailMatchValidator}),
      mobile:[this.empRecord.mobile],
      sendNotification:['email'],
      range:[this.empRecord.range,[rangeVlidators(10,20)]]
    });
  }
  ngOnInit(): void {
  
}
/**
 * ! is non-null assertion operation( post-fix expression)
 * -it just saying to type checker that ur sure that a is not null or undefined
 * the operation a! produde a value of the type of a width 
 * null and undefined excluded
 * if a is a type String then 'a!' ensure that it will return
 * a string value, and not NULL, or UNDEFINED
 */
get firstName(){ return this.employeeFormGroup.get('firstName')!;}
get range(){ return this.employeeFormGroup.get('range')!;}
get emailGroup(){ return this.employeeFormGroup.get('emailGroup')!;}
get mobile(){ return this.employeeFormGroup.get('mobile')!;}
get email(){ return this.employeeFormGroup.get('email')!;}

loadEmployee(){
  let data ={
    firstName:'Sanjeev',
    lastName:'Sham',
  }
  this.employeeFormGroup.patchValue(data);
}

doNotification(msgtype:any){
  if(msgtype === 'sms'){
    let mobileControl=this.employeeFormGroup.get('mobile');
    mobileControl?.setValidators([Validators.required]);
    mobileControl?.updateValueAndValidity();
  }
}
}
