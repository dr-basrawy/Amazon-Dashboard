import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginAdmin } from 'src/app/Models/login-admin';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {
  apiURL = 'http://localhost:3300/admin/login';
  isLogBehavior: BehaviorSubject<boolean>;
  currentAdmin: LoginAdmin | null = null; // Initialize currentUser to null

  constructor(private http: HttpClient) {
    this.isLogBehavior = new BehaviorSubject<boolean>(this.isAdminLoggedIn());
  }

  
  login(email: string, password: string): Observable<boolean> {
    return this.http.post<any>(this.apiURL, { email, password }).pipe(
      map(response => {
        const { token } = response;
        if (token) {
          localStorage.setItem('token', token);
          this.currentAdmin = response.admin; 
          this.isLogBehavior.next(true);
          return true;
        } else {
          this.isLogBehavior.next(false);
          return false;
        }
      })
    );
  }


  logout() {
    localStorage.removeItem("token");
    this.isLogBehavior.next(false);
  }

  isAdminLoggedIn(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  getUserStatus(): Observable<boolean> {
    return this.isLogBehavior.asObservable();
  }
}