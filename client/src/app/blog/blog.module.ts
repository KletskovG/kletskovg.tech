import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [BlogPageComponent, HomeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [BlogPageComponent, HomeComponent]
})
export class BlogModule { }
