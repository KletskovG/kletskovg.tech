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
  constructor(private http: HttpClient) {}

  public title  = 'kletskovg.tech';
  public githubLink: string;
  public latestCommitDate: string;

  ngOnInit() {
    this.http.get<gitLink>('http://0.0.0.0:8080/gitlink', {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
     .subscribe(
        value => this.githubLink = value.message,
        error => console.log(error),
      );

    this.getLatestCommit();
  }

  private getLatestCommit() {
    this.http.get<any>('https://api.github.com/repos/kletskovg/kletskovg.tech/commits')
      .subscribe(
        res => {
          const commitDate = new Date(res[0].commit.author.date);
          const commitDay = commitDate.getDate();
          const commitMonth = commitDate.getMonth() + 1;
          const commitYear = commitDate.getFullYear();
          const dateStr = `${commitDay}.${commitMonth}.${commitYear}`;
          this.latestCommitDate = `Latest commit ${dateStr}`;
        },
        error => console.log(error)
      )
  }
}
