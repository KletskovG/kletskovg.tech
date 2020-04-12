import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/core/studentHelper/auth.service';

@Component({
  selector: 'app-student-auth',
  templateUrl: './student-auth.component.html',
  styleUrls: ['./student-auth.component.scss']
})
export class StudentAuthComponent implements OnInit {

  public isSignInFormTogggled: boolean = false;
  public toggleText: { paragraphText: string, linkText: string, } = {
    linkText: 'Sign in!',
    paragraphText: 'Already have an account?',
  };

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
    document.querySelector('header').remove();
    document.querySelector('footer').remove();
    document.title = 'Student Helper | Auth';
    this.authService.getUserInfo()
      .subscribe(
        (value) => console.log(value),
        (err) => console.log(err),
      )
  }


  public toggleForms(): void {
    this.isSignInFormTogggled = !this.isSignInFormTogggled;

    if (this.isSignInFormTogggled) {
      this.toggleText = {
        paragraphText: 'Dont have an account?',
        linkText: 'Create one!',
      };
    } else {
      this.toggleText = {
        linkText: 'Sign in!',
        paragraphText: 'Already have an account?',
      };
    }
  }

}
