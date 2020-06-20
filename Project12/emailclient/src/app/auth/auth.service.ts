import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

interface SignupCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}

interface SignupResponse{
  username: string;
}

interface SingedinResponse {
  authenticated: boolean;
  username: string;
}

interface SiginCredentials{
  username: string;
  password: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  rootUrl = 'https://api.angular-email.com';
  signedin$ = new BehaviorSubject(false);

  constructor(private http: HttpClient) { }

  usernameAvailable(username: string) {
    return this.http.post<{available: boolean}>(this.rootUrl + '/auth/username', {
      username
    });
  }


  signup(credentials: SignupCredentials) {
    return this.http.post<SignupResponse>(this.rootUrl + '/auth/signup', credentials, {withCredentials: true}).pipe
    (
      tap(() => {
        this.signedin$.next(true);
      })
    );
  }

  checkAuth() {
    return this.http.get<SingedinResponse>(`${this.rootUrl}/auth/signedin`, {withCredentials: true})
    .pipe(
      tap(({ authenticated }) => {
        this.signedin$.next(authenticated);
      })
    );
  }

  signout() {
   return this.http.post(`${this.rootUrl}/auth/signout`, {})
   .pipe(
     tap( () => {
       this.signedin$.next(false);
     })
   );
  }

  signin(credentials: SiginCredentials) {
    return this.http.post(`${this.rootUrl}/auth/signin`, credentials)
    .pipe(
      tap(() => {
        this.signedin$.next(true);
      })
    );
  }
}
