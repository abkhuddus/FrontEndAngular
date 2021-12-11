import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';



const routes: Routes = [
  { path: 'customerlist', component: ListCustomersComponent },
    {path: 'addnew',component :CreateCustomerComponent },
    {path: 'getcustomerDetail/:id',component :CustomerDetailsComponent },
     { path: "update/:id", component: UpdateCustomerComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
