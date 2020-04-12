import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/core/studentHelper/auth.service';
import IUser from '@app/models/IUser';
import { UtilityService } from '@app/core/utility.service';
import { Router } from '@angular/router';

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
    private utility: UtilityService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  public signIn() {
    this.authService.signIn(this.email, this.password)
      .subscribe(
        (value) => {
          console.log(value);
          window.localStorage.setItem('auth', 'true');
          document.cookie = `token=${value.token}`;
          document.cookie = `name=${value.name}`;
          document.cookie = `id=${value.user_id}`;

          this.router.navigateByUrl('student');
        },
        (err) => console.log(err),
      )
    this.email = '';
    this.password = '';
  }

}
