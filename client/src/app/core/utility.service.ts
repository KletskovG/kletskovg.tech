import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  public deleteCookie(name: string): void {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  public getCookie(name: string): string {
    const matches = document.cookie.match(new RegExp(
      '(?:^|; )' + name.replace(/([.$?*|{}()[]\\\/\+^])/g, '\\$1') + '=([^;]*)'
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  public getAuthToken(): string {
    return 'Bearer' + ' ' + this.getCookie('token');
  }

  public setHttpHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': this.getAuthToken(),
    });
  }
}
