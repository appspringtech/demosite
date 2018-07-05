import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { CookieService } from 'ngx-cookie';

@Injectable()
export class AuthService {

  private readonly SESSION_ID_COOKIE_KEY = 'session_id';

  constructor(private cookieService: CookieService) {
  }

  submitOrganization(organization: string): Observable<any> {
    return new Observable((observer: Observer<any>) => {
      if (organization === 'demo') {
        observer.next(true);
        observer.complete();
      } else {
        observer.error('Wrong organization');
      }
    });
  }

  submitCredentials(username: string, password: string): Observable<any> {
    return new Observable((observer: Observer<any>) => {
      if (username === 'admin' && password === '123456') {
        this.createSession();
        observer.next(true);
        observer.complete();
      } else {
        observer.error('Wrong credentials');
      }
    });
  }

  hasSession(): boolean {
    const sessionID = this.cookieService.get(this.SESSION_ID_COOKIE_KEY);
    return sessionID != null;
  }

  closeSession(): void {
    this.setSessionCookie(null);
  }

  private createSession(): void {
    this.setSessionCookie(new Date().getTime().toString());
  }

  private setSessionCookie(value: string): void {
    this.cookieService.put(this.SESSION_ID_COOKIE_KEY, value);
  }

}
