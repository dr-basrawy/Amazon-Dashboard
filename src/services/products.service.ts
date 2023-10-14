import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from 'src/Models/product';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
apiUrl='http://localhost:3300/product';
  constructor(private http:HttpClient) {}
  getAllProducts():Observable<Product>{
    return this.http.get<Product>(this.apiUrl);
  }
  addProducts(product:Product):Observable<Product>{
    return this.http.post<Product>(this.apiUrl,product,httpOptions);
  }
  deleteProducts(product:Product):Observable<Product>{
    const url=`${this.apiUrl}/${product._id}`
    return  this.http.delete<Product>(url);
  }
  updateProducts(product:Product):Observable<Product>{
    const url=`${this.apiUrl}/${product._id}`
    return  this.http.patch<Product>(url,product,httpOptions);
  }
  getProductById(productId:any):Observable<Product>{
    return this.http.get<Product>(this.apiUrl+'/'+productId)
  }

}
