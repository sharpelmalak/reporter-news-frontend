import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reporters } from 'src/app/interface/reporterModel';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }
  emailCheck:boolean = false
  ageCheck:boolean = false
  phoneCheck:boolean = false
  user:any
  token:any
  changeEmail(){
    this.emailCheck = false
  }
  changeAge(){
    this.ageCheck = false
  }
  changePhone(){
    this.phoneCheck = false
  }
  signUp(data:Reporters){
    this.authService.signUp(data).subscribe({
      next:(value:any)=>{
        console.log(value)
        this.user = value
        this.token = this.user.token
        localStorage.setItem('token',this.token)
        this.router.navigate(['/'])
      },
      error:(e)=>{
        if(e.error.code == 11000){
          this.emailCheck = true
        }
        if(e.error.errors.phone){
         
          this.phoneCheck = true
        }
        if (e.error.errors.age){
          this.ageCheck = true
        }
       
        
      }
    })
  }

  ngOnInit(): void {
  }

}
