import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import IUser from '@app/models/IUser';

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

  public signIn(username: string, password: string,): Observable<any> {
    return this.http.get(`${environment.STUDENT_HELPER_URL}/api/auth?Username=${username}&Password=${password}`);
  }

  public getUserInfo(): Observable<any> {
    return this.http.get(`${environment.STUDENT_HELPER_URL}/api/user`);
  }
}
