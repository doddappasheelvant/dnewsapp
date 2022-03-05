import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingComponent } from './topheading/topheading.component';
import {BusinessnewsComponent} from './businessnews/businessnews.component';
import {SportsNewsComponent} from './sports-news/sports-news.component';

const routes: Routes = [
  {path: '', component:TopheadingComponent},
  {path: 'tech', component:TechnewsComponent},
  {path: 'business', component:BusinessnewsComponent},
  {path: 'sports', component:SportsNewsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
