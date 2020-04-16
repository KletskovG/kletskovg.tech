import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/core/studentHelper/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public email = '';
  public password = '';
  public repeatPassword = '';

  public isValidError = false;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  public signUp() {
    // const authData: IAuthData = {
    //   email: this.email,
    //   password: this.password,
    //   repeatPassword: this.repeatPassword,
    // };
    // if (this.authService.isValidAuthData(authData)) {
    //   this.authService.signUp(authData);
    // } else {
    //   this.isValidError = true;
    // }
  }
}
