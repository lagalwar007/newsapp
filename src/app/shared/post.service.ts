import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()

export class PostService {
  private apiUrl:string = environment.api;
  private apiToken:string = environment.token; 
 
  constructor(private http:HttpClient) {}
  
  /* Add api key in url */
  /**
   * getTopHeadlines
   */
  public getTopHeadlines(params?:{},paramCountry?:string) {
    let country = (paramCountry) ? paramCountry : 'in';
    let url = `${this.apiUrl}/top-headlines?country=${country}`
    if(params){
      for(let data in params){
        url+= `&${data}=${params[data]}`;
      }
    }
    return this.http.get(this.attachedToken(url));
  }

  private attachedToken(url:string){
    return `${url}&apiKey=${this.apiToken}`
  }
}
