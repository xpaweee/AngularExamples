import { Injectable } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class MatchPassword implements Validator  {
  validate(formGroup: FormGroup) {
    const {password, passwordConfirmation} = formGroup.value;

    if (password === passwordConfirmation) {
      return null;
    }

    return { passwordsDontMatch: true};
  }

}
