import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reporters } from '../interface/reporterModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url='http://localhost:3000/'
  constructor(private http:HttpClient) { }

  signUp(data:Reporters){
    return this.http.post(this.url+'signup',data)
  }
  login(data:any){
    return this.http.post(this.url+'login',data)
  }
  getToken(){
    return localStorage.getItem('token')
  }
  logout(){
    return this.http.delete(this.url+'logout')
  }
}
