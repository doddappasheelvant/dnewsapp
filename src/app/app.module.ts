import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';

import {HttpClientModule} from '@angular/common/http';
import {NewsapiservicesService} from '../app/service/newsapiservices.service';
import { TechnewsComponent } from './technews/technews.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { SportsNewsComponent } from './sports-news/sports-news.component';


@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechnewsComponent,
    BusinessnewsComponent,
    SportsNewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
