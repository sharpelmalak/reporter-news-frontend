import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from 'src/app/interface/newsModel';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news:News[]=[]
  constructor(private newsService:NewsService,private router:Router) { }

  getNews(){
    this.newsService.getNews().subscribe({
      next:(res)=>{
        this.news = res
      }
    })
  }

  deleteNews(news:News){
    this.newsService.deleteNews(news._id).subscribe({
      next:(res)=>{
        let index = this.news.indexOf(news)
        this.news.splice(index,1)
      }
    })
  }
  back(){
    this.router.navigate(['/profile'])
  }

  ngOnInit(): void {
    this.getNews()
  }

}
