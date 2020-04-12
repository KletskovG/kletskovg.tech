import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/core/studentHelper/auth.service';
import { Router } from '@angular/router';

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
    private router: Router,
  ) { }

  ngOnInit() {
  }

  public signUp() {
    if (this.password === this.repeatPassword) {
      this.authService.signUp(this.email, this.password)
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
    }
  }
}
