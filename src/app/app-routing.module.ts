import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { EventDetailsComponent } from './event-details/event-details.component';
const routes: Routes = [
  {
    path:'',
    component: SearchComponent 
  },
  {
    path:'events/:name/:date',
    component:EventDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
