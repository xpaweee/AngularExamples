import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  includeLetters = false;
  includeSymbols = false;
  includeNumbers = false;
  length = 0;


  onChangeLength(value: string) {
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }

  }

  onChangeUserLetters() {
    this.includeLetters = !this.includeLetters;
  }
  onButtonClikc() {
    const numbers = '1234567890';
    const letters = 'avcdefghijklmnoprstwyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars +=
        numbers;
    }
    if (this.includeSymbols) {
      validChars += numbers;
    }

    let generatedPassword = '';
    // tslint:disable-next-line:prefer-for-of
    for (let index = 0; index < this.length; index++) {
      // tslint:disable-next-line:no-shadowed-variable
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];

    }
    this.password = generatedPassword;
  }
  onChangeUserSymbols() {
    this.includeNumbers = !this.includeNumbers;

  }
  onChangeUseNumbers() {
    this.includeSymbols = !this.includeSymbols;

  }
}
