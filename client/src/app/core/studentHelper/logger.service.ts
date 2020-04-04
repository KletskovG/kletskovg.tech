import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import ILogger from '@models/ILogger';
import {environment} from '@src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(private http: HttpClient) {}

  public getAllLogs(): Observable<any> {
    return this.http.get(`${environment.STUDENT_HELPER_URL}/api/logger`);
  }
}
