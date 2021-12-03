import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reporters } from 'src/app/interface/reporterModel';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  checkLogin:boolean = false
  changeLogin(){
    this.checkLogin = false
  }
  constructor(private authService:AuthService,private router:Router) { }
  user:any
  token:any

login(data:any){
  this.authService.login(data).subscribe({
    next:(res)=>{
      console.log(res)
      this.user =res
      this.token = this.user.token
      localStorage.setItem('token',this.token)
      this.router.navigate(['/'])

    },
    error:(e)=>{
      console.log(e)
      this.checkLogin = true
    }

  })
}


  ngOnInit(): void {
  }

}
