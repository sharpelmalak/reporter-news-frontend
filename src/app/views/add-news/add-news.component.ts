import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from 'src/app/interface/newsModel';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  constructor(private newsService:NewsService,private router:Router) { }

  addNews(data:News){
    this.newsService.addNews(data).subscribe({
      next:(res)=>{
        console.log(res)
        this.router.navigate(['/news'])
      },
      error:(e)=>{
        console.log(e)
      }
    })
  }
  back(){
    this.router.navigate(['/profile'])
  }

  ngOnInit(): void {
  }

}
