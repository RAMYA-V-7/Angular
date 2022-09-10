import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { detail1 } from './detail';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private url:string='https://jsonplaceholder.typicode.com/photos';

  constructor(private http:HttpClient) { }

  getData():Observable<detail1[]>{
    return this.http.get<detail1[]>(this.url);
  }
}
