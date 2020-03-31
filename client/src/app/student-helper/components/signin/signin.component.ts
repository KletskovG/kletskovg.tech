import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/core/studentHelper/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public email = '';
  public password = '';
  public isErrorToggled = false;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  public signIn() {
    // const authData: IAuthData = {
    //   email: this.email,
    //   password: this.password,
    // };
    // const isValid = this.authService.isValidAuthData(authData);
    // console.log(isValid);
    // if (this.authService.isValidAuthData(authData)) {
    //   this.authService.signIn(authData);
    // } else {
    //   this.isErrorToggled = true;
    //   return;
    // }

    
  }

}
