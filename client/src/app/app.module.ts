import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient, } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { BlogModule } from './blog/blog.module';
import { StudentHelperModule } from './student-helper/student-helper.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    BlogModule,
    StudentHelperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
