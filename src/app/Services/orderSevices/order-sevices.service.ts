import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Order } from 'src/app/models/order';
// import { Order } from 'src/app/models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderSevicesService {

  constructor(private httpClient:HttpClient) { }

  getAllProducts():Observable<Order[]>{
    
     return this.httpClient.get<Order[]>('http://localhost:3300/order');
    //  return this.httpClient.get<Iproduct[]>(`${environment.BaseApiURL}/products`);
    }
  getPrdByID(orderID:string):Observable<{data:Order}>{
    // return this.httpClient.get<Iproduct>('http://localhost:3000/products'+'/'+prdID);
    return this.httpClient.get<{data:Order}>(`http://localhost:3300/order/${orderID}`,{headers:{localization:'en'}});
  }

  deleteById(id:string):Observable<{data: boolean}>{
    return this.httpClient.delete<{data:boolean}>(`http://localhost:3300/order/${id}`);
  }
  updateById(orderId:string):Observable<{data:Order}>{
  return this.httpClient.patch<{data:Order}>(`http://localhost:3300/order/${orderId}/changetocomplete`,{});

  }
}
