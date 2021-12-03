import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from 'src/app/interface/newsModel';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-update-news',
  templateUrl: './update-news.component.html',
  styleUrls: ['./update-news.component.css']
})
export class UpdateNewsComponent implements OnInit {

  new:News={}
  file:any
  constructor(private newsService:NewsService,private route:ActivatedRoute,private router:Router) { }

  _id:string = this.route.snapshot.params['id']

  getNewsById(){
    this.newsService.getNewsById(this._id).subscribe({
      next:(res:News)=>{
         this.new = res
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
    this.newsService.addImage(this._id,myData).subscribe({
      next:(res)=>{
       
      },
      error:(e)=>{

        console.log(e)
        
      }
    })
  }
  updateNews(news:News){
    this.newsService.updateNews(this._id,news).subscribe({
      next:(res)=>{
        this.uploadFile()
        this.getNewsById()
        this.router.navigate(['/news'])
      }
    })
  }

  back(){
    this.router.navigate(['news'])
  }


  ngOnInit(): void {
    this.getNewsById()
  }

}
