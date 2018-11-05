import { Headlines } from './../interface/headlines';
import { PostService } from './../shared/post.service';
import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public newsArticles;
  public pageNo:number = 1;
  constructor(private post:PostService,private loading:Ng4LoadingSpinnerService) { }
  
  ngOnInit() {
    this.loading.show();
    this.getTopHeadlines(this.pageNo);
  }
  newPost(){
    this.pageNo = this.pageNo + 1;
    this.getTopHeadlines(this.pageNo);
    window.scrollTo(0,200);
  }
  getTopHeadlines(page:number){
    this.post.getTopHeadlines({pageSize:5,page:page}).subscribe((news:Headlines)=>{
      if(news.status == "ok"){
        this.newsArticles = news.articles;
        this.loading.hide();
        
      }
    })
  }

}
