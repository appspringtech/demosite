import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class AuthService {

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
        observer.next(true);
        observer.complete();
      } else {
        observer.error('Wrong credentials');
      }
    });
  }

}
