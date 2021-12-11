import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customers.service';
import { Customer } from '../customerslist';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  
  id: number | any;
  customer: Customer= new Customer();
  

  constructor(private route: ActivatedRoute,private router: Router,
    private customerService: CustomerService) { }

  ngOnInit() {
    this.customer = new Customer();
    this.id = this.route.snapshot.params['id'];
    this.customerService.getCustomer(this.id).
    subscribe(data => {
      console.log("data from get Customer"+ data);
      this.customer=data;
    },
    error=> console.log(error));
  }

  updateCustomer() {
    this.customerService.updateCustomer(this.id, this.customer)
      .subscribe(data => {
        console.log(data);
        this.customer = new Customer();
       ;
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateCustomer();   
     this.router.navigate(['customerlist']); 
  }
}
