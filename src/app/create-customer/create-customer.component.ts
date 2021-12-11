import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../customers.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
froms: FormGroup;

  constructor( private fb: FormBuilder,private customerService: CustomerService,
    private router: Router) 
  {}

  ngOnInit() {
    this.froms=this.fb.group({
      name:['',[Validators.required,Validators.minLength(3)]],
      age:['',Validators.required],
      adress:['',Validators.required],
      accountType:['',Validators.required]
    });
  }
  onsubmit(){
    this.customerService.createCustomer(this.froms.value).subscribe((d) => {
        console.log(d);
        this.router.navigateByUrl('/customerlist');
      }

      );
  }
}