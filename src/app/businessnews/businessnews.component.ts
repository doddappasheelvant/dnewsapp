import { Component, Input, OnInit } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service';

@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.css']
})
export class BusinessnewsComponent implements OnInit {

  constructor( private _service:NewsapiservicesService) { }
  businessnewsDisplay:any = [];
  ngOnInit(): void {

    this._service.businessNews().subscribe((result=>{
      const filteredData = result.data.filter(x=>x.image !== null);
      this.businessnewsDisplay = filteredData;
      console.log(result);
    }))

  }

}
