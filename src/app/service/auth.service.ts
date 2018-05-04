import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs';
@Injectable()
export class AuthService {
  URLBASE  = 'http://localhost:3000/auth/v1';
  AUTH_TOKEN = 'AUTH_TOKEN';
  constructor(private httpClient: HttpClient) { }

getToken(auth: Auth): Observable<any> {
    const token: string = null;
    if (token != null) {
      const obs: Observable<any> = Observable.from(token);
      return obs;
    } else {
      return this.httpClient.post(this.URLBASE, auth);
    }
}

saveToken(token: string): Observable<any> {
    localStorage.setItem(this.AUTH_TOKEN, token);
    const obs: Observable<any> = Observable.create(
      observer => {
        observer.next(true);
        observer.complete();
      }
    )
  return obs;
}

getTokenFromLocalStorage(): String {
   const token = localStorage.getItem(this.AUTH_TOKEN) ;
   return token;

 // const tokenObs = new Observable(<any>);

}

  isUserAuthenticated(): Promise <boolean> {
    return this.httpClient.post(this.URLBASE + '/isAuthenticated', { })
      .map((res) => res['isAuthenticated']
      )
      .toPromise();
  }


}
