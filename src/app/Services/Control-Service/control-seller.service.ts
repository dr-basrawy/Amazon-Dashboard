import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { state } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class ControlSellerService {

  private baseUrl = 'http://localhost:3300'; 

  constructor(private http: HttpClient) { }

  getAllSellers(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/seller`);
  }

  deleteSeller(sellerId: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/seller/${sellerId}`);
  }

  // changeStatus(sellerId: string,status:string): Observable<any> {
  //   return this.http.patch<any>(`${this.baseUrl}/seller/${sellerId}`,{status:"blocked"});
  // }
  changeStatusToBlocked(sellerId: string, status: string): Observable<any> {
    return this.http.patch<any>(`${this.baseUrl}/seller/${sellerId}`, { status :'blocked'});
  }
  changeStatusToUnblocked(sellerId: string, status: string): Observable<any> {
    return this.http.patch<any>(`${this.baseUrl}/seller/${sellerId}`, { status :'Active'});
  }
  changeStatusToWarning(sellerId: string, status: string): Observable<any> {
    return this.http.patch<any>(`${this.baseUrl}/seller/${sellerId}`, { status :'warning'});
  }
}
