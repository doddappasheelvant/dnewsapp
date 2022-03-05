import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-sports-news',
  templateUrl: './sports-news.component.html',
  styleUrls: ['./sports-news.component.css']
})
export class SportsNewsComponent implements OnInit {

  constructor(private _service:NewsapiservicesService) { }

  sportsnewsDisplay:any = [];

  ngOnInit(): void {
    this._service.sportsNews().subscribe((result=>{
      const filteredData = result.data.filter(x=>x.image !== null);
      this.sportsnewsDisplay = filteredData;
      console.log(result);
    }))
  }

}
