import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  base_url = "http://api.mediastack.com/v1/news?access_key="+ environment.mediastack_api_key;

  constructor(private _http:HttpClient) { }

  // API for news-> https://mediastack.com/documentation
  //APIs used for gold rate -> https://www.goldapi.io/dashboard
  //APIS use from https://newsapi.org/
  newsApiUrl = this.base_url + "&countries=in&limit=100";
  techApiUrl = this.base_url + "&keywords=technology&limit=100";
  businessApiUrl = this.base_url + "&countries=us&categories=business&limit=100";
  sportsApiUrl = this.base_url + "&countries=in&categories=sports&limit=100";
  
  //topHeading()
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }
  //technews
  techNews():Observable<any>
  {
    return this._http.get(this.techApiUrl);
  }
  //businessnews
  businessNews():Observable<any>
  {
    return this._http.get(this.businessApiUrl);
  }
  //sportsnews
  sportsNews():Observable<any>
  {
    return this._http.get(this.sportsApiUrl);
  }
}
