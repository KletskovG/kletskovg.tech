import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { Page404Component } from './components/page404/page404.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, Page404Component],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class SharedModule { }
