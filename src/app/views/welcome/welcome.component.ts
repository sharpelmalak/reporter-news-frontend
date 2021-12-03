import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/interface/newsModel';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private newsService:NewsService) { }

  news:News[]=[]

  authCheck:boolean = false

  getAllNews(){
    this.newsService.getAllNews().subscribe({
      next:(res)=>{
        console.log(res)
        this.news =res
      },
      error:(e)=>{
        this.authCheck = true
      }
    })
  }

  ngOnInit(): void {
    this.getAllNews()
  }

}
