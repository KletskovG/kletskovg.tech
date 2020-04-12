import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LeftsideLinkComponent } from './components/home/leftside-link/leftside-link.component';
import { InfoComponent } from './components/home/info/info.component';



@NgModule({
  declarations: [BlogPageComponent, HomeComponent, LeftsideLinkComponent, InfoComponent],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [BlogPageComponent, HomeComponent]
})
export class BlogModule { }
