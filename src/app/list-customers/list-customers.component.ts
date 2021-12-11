import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerService } from '../customers.service';
import { Customer } from '../customerslist';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {

    
      customerList : Observable<Customer[]> | any ;

  constructor(private customerService: CustomerService,
    private router: Router) {}

  ngOnInit(): void  {
  this.reloddata();
  }
  deleteCustomers(id: number) {
   this.customerService.deleteCustomer(id).subscribe(
     data =>{
       console.log(data);
       this.reloddata();
     }  
   )
  }
  reloddata(){
   this.customerList=this.customerService.getAllCustomerList().subscribe(res =>{
     this.customerList=res
   });

  }
 
  CustomerDetails(id: number){
    this.router.navigate(['getcustomerDetail', id]);
  }

 updateCustomer(id: number){
    this.router.navigate(['update', id]);
  }

}
