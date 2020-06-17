import { AuthService } from './../auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncValidator, FormControl } from '@angular/forms';
import {map, catchError} from 'rxjs/operators';
import { of } from 'rxjs';
import { off } from 'process';

@Injectable({providedIn: 'root'})
export class UniqueUsername implements AsyncValidator {
  constructor(private authService: AuthService) {}

  validate = (control: FormControl) => {
    const { value } = control;
    return this.authService.usernameAvailable(value)
    .pipe(
      map((value) => {
        if (value.available) {
          return null;
        }
      }),
      catchError(err => {
        console.log(err);
        if (err.error.username) {
          return of({ nonUniqueUsername: true });
        } else {
          return of({ noConnection: true });
        }
      })
    );
  }
}
