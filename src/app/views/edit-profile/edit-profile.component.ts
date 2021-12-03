import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reporters } from 'src/app/interface/reporterModel';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  user:Reporters={}
  file:any

  constructor(private userService:UserService,private router:Router) { }


  getProfile(){
    this.userService.getProfile().subscribe({
      next:(res)=>{
        this.user = res
      }
    })
  }

  handelUpload(event:any){
    console.log(event.target.files)
    this.file = event.target.files
  }

  uploadFile(){
    // multipart / form-data 

    const myData = new FormData()
    for(let i=0; i<this.file.length;i++){
      myData.append('avatar',this.file[i])
      
    }
    console.log(myData)
    this.userService.addImage(myData).subscribe({
      next:(res)=>{
       
      },
      error:(e)=>{

        console.log(e)
        
      }
    })
  }

  editProfile(user:any){
    this.userService.editProfile({name:user.name,phone:user.phone,password:user.password}).subscribe({
      next:(res)=>{
        this.uploadFile()
        this.getProfile()
        this.router.navigate(['/profile'])
        
      },
      error:(e)=>{
        console.log(e)
        
      }

    })
   // this.getProfile()
    //this.router.navigate(['/profile'])

  }
  back(){
    this.router.navigate(['/profile'])
  }
  ngOnInit(): void {
    this.getProfile()
  }

}
