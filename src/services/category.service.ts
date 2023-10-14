import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Category } from 'src/Models/category';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl='http://localhost:3300/category'
  constructor(private http:HttpClient) { }
  getAllCategory():Observable<Category>{
   return this.http.get<Category>(this.apiUrl);
  }
  getCategoryById(categoryId:any):Observable<any>{
   return this.http.get<any>(this.apiUrl+'/'+categoryId);
  }
  addCategory(category:Category):Observable<Category>{
    return  this.http.post<Category>(`${this.apiUrl}`, category,httpOptions )
    .pipe(
      tap(() => {
        this.getAllCategory().subscribe();
      })
    );
  }
  deleteCategory(category:Category):Observable<Category>{
    return  this.http.delete<Category>(this.apiUrl+"/"+category._id)
  }
  updateCategory(category:Category):Observable<Category>{
    return  this.http.patch<Category>(this.apiUrl+"/"+category._id ,category,httpOptions).pipe(
      tap(() => {
        this.getAllCategory().subscribe();
      })
    );
  }
}
