import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News } from '../interface/newsModel';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  url='http://localhost:3000/'
  constructor(private http:HttpClient) { }
  addNews(data:News){
    return this.http.post(this.url+'addnews',data)
  }
  getNews(){
    return this.http.get<News[]>(this.url+'news')
  }
 getNewsById(id:any){
   return this.http.get<News>(this.url+'targetnews/'+id)
 }
  updateNews(id:any,body:News){
    return this.http.patch(this.url+'editnews/'+id,body)
  }
  deleteNews(id:any){
    return this.http.delete(this.url+'deletenews/'+id)
  }

  getAllNews(){
    return this.http.get<News[]>(this.url+'allnews')
  }
  addImage(id:any,image:any){
    return this.http.post(this.url+'newsphoto/'+id,image)
  }
}
