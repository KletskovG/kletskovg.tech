import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentPageComponent } from './components/student-page/student-page.component';
import { StudentAuthComponent } from './components/student-auth/student-auth.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import {FormsModule} from '@angular/forms';
import { LoggerComponent } from './components/logger/logger.component';



@NgModule({
  declarations: [StudentPageComponent, StudentAuthComponent, SigninComponent, SignupComponent, LoggerComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    StudentPageComponent,
    StudentAuthComponent,
    LoggerComponent
  ]
})
export class StudentHelperModule { }
