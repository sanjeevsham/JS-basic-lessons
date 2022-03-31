import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
   //data-module
   customerModel:any;
  constructor() { }

  ngOnInit(): void {
    this.customerModel={
      firstName:'',
      lastName:'',
      email:'sanjeevsham@gmail.com'
    }
  }
  saveCustomer(customerFormGroup:any){
    if(customerFormGroup.valid){
      console.log(customerFormGroup.value);
    }
  }
}
