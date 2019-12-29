import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogPageComponent } from './blog/components/blog-page/blog-page.component';
import { HomeComponent } from './blog/components/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'blog', component: BlogPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
