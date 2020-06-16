import { UniqueUsername } from './../validators/unique-username';
import { MatchPassword } from './../validators/match-password';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
authForm = new FormGroup({
  // tslint:disable-next-line:max-line-length
  username: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[a-z0-9]+$/)], [this.uniqueUsername.validate]),
  password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
  passwordConfirmation: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)])
}, {validators: [this.matchPassword.validate]});



  constructor(private matchPassword: MatchPassword, private uniqueUsername: UniqueUsername) { }

  ngOnInit(): void {
  }

}
