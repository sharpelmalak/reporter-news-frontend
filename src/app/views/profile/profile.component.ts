import { Component, OnInit } from '@angular/core';
import { Reporters } from 'src/app/interface/reporterModel';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:Reporters={}
  constructor(private userService:UserService) { }

  getProfile(){
    this.userService.getProfile().subscribe({
      next:(res:any)=>{
        this.user = res
      }
    })
  }
  

  ngOnInit(): void {
    this.getProfile()
  }

}
