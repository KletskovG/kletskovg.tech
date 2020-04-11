import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
interface gitLink {
  message: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  public title = 'kletskovg.tech';
  public latestCommitDate: string;
  public githubLink: string;
  private BASE_URL = environment.BASE_URL;

  ngOnInit() {
    document.querySelector('header').remove();

    this.http.get<gitLink>(`${this.BASE_URL}/gitlink`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
      .subscribe(
        value => {
          console.log('Hello from server' + value.message);
          this.githubLink = value.message;
        },
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
