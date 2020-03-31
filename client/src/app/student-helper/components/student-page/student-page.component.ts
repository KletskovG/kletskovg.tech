import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/studentHelper/auth.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss']
})
export class StudentPageComponent implements OnInit {

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
    document.querySelector('header').remove();
    document.querySelector('footer').remove();
    document.title = 'Student Helper';

    this.authService.testLog();
  }

}
