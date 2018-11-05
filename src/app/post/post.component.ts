import { PostService } from './../shared/post.service';
import { Component, OnInit, Input } from '@angular/core';

 
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input('news') newsItem;
  public newsArticles;
  constructor(private post:PostService) { 
    
  }

  ngOnInit() {
    
  }

}
