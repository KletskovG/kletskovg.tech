import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface gitLink {
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient){}

  public title: string  = 'kletskovg.tech';
  public githubLink: string;

  ngOnInit() {
    this.http.get<gitLink>('http://localhost:3200/gitlink', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'mode': 'no-cors',
      },
    })
     .subscribe(
        value => this.githubLink = value.message,
        error => console.log(error),
      );
  }
}
