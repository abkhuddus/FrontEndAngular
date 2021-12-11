import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  
    private baseUrl = 'http://localhost:8095/api/customer';

    private baseUrlConsumer  ='http://localhost:8764/consumer/customer';

   
    getCustomer(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/${id}`);
      }

       getAllCustomerList(): Observable<any> {
        return this.http.get(`${this.baseUrlConsumer}`);
      }
      deleteCustomer(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
      }

  constructor(private http: HttpClient) { }


  getcustomers(): Observable<any>{
    return this.http.get(`${this.baseUrlConsumer}`);
   }
   
    

  getcustomerById(id:number):Observable<any> {
    console.log("Got Result")
    return this.http.get(`${this.baseUrl}/${id}`); 
   }
  

deleteByid(id):Observable<any>{
      return this.http.get("http://localhost:8080/customer-producer/deleteByid/"+id);

}
   createCustomer(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }
   updateCustomer(id: number, value: any): Observable<Object> {
        return this.http.put(`${this.baseUrl}/${id}`, value);
      }



}
