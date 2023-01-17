import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  appName = 'Interceptores';

  url = "https://jsonplaceholder.typicode.com/users";

  constructor( private http:HttpClient ) { }

  ngOnInit(): void {
   
  }
 getView(){
    return this.http.get<any>(this.url);
  }}
