import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reporters } from '../interface/reporterModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url='http://localhost:3000/'
  constructor(private http:HttpClient) { }
  getProfile(){
    return this.http.get<Reporters>(this.url+'profile')
  }
  editProfile(user:any){
    return this.http.patch(this.url+'editprofile',user)
  }
  addImage(image:any){
    return this.http.post(this.url+'profile/avatar',image)
  }
}
