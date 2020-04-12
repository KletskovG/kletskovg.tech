import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentPageComponent } from './components/student-page/student-page.component';
import { StudentAuthComponent } from './components/student-auth/student-auth.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [StudentPageComponent, StudentAuthComponent, SigninComponent, SignupComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    StudentPageComponent,
    StudentAuthComponent,
  ]
})
export class StudentHelperModule { }
