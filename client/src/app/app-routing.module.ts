import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogPageComponent } from './blog/components/blog-page/blog-page.component';
import { HomeComponent } from './blog/components/home/home.component';
import { Page404Component } from './shared/components/page404/page404.component';
import { StudentPageComponent } from './student-helper/components/student-page/student-page.component';
import { StudentAuthComponent } from './student-helper/components/student-auth/student-auth.component';
import {LoggerComponent} from './student-helper/components/logger/logger.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'blog', component: BlogPageComponent },
  { path: 'student', component: StudentPageComponent },
  { path: 'student/auth', component: StudentAuthComponent },
  { path: 'student/logger', component: LoggerComponent },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
