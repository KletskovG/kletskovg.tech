import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  public testLog(): void {
    console.log('Hello from auth service');
  }

  public signIn(): void {
    // this.http.get(`${environment.STUDENT_HELPER_URL}/api/auth?Username=Test2&Password=OtdYFhd2XLweaTYcIOgMuAN8APnNv18UiNRZODHyOvf4kuQ8`, {
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //   },
    // })
    //   .subscribe(
    //     (value) => console.log(value),
    //     (err: Error) => console.log(err),
    //   )

    this.http.get(`${environment.STUDENT_HELPER_URL}/api/user/all`)
      .subscribe(
        (value) => console.log(value),
        (err) => console.log(err),
      )
  }
}
