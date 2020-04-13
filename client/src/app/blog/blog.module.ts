import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LeftsideLinkComponent } from './components/home/leftside-link/leftside-link.component';
import { InfoComponent } from './components/home/info/info.component';
import { RavesPageComponent } from './components/raves-page/raves-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [BlogPageComponent, HomeComponent, LeftsideLinkComponent, InfoComponent, RavesPageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [BlogPageComponent, HomeComponent, RavesPageComponent]
})
export class BlogModule { }
