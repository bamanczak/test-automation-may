import {
  Component,
  OnInit
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('1s 0.35s ease-out',
                    style({ opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ opacity: 1 }),
            animate('0.3s ease-in',
                    style({ opacity: 0 }))
          ]
        )
      ]
    )
  ]
})

export class AppComponent {
  inputNumber: string;
  isValid: boolean;
  peselArray: Array<number>;
  year;
  month;
  day;
  isMale;
  isInitiated: boolean;
  hasFocus: boolean;


  onSubmit() {
    this.isInitiated = true;
    const pesel = this.inputNumber;
    this.isValid = this.isValidPesel(pesel);
    if (this.isValid) {
      this.getDate(this.peselArray);
      this.isMale = this.peselArray[9] % 2 === 1;
    }
  }

  isValidPesel(pesel) {
    if (typeof pesel !== 'string') {
      return false;
    } else {
      const peselArray = new Array();
      for (let i = 0; i < 11; i++) {
        peselArray[i] = parseInt(pesel.substring(i, i + 1), 10);
      }
      this.peselArray = peselArray;
      return this.verifyControlNumber(peselArray) &&
              this.verifyDate(this.getYear(peselArray), this.getMonth(peselArray), this.getDay(peselArray));
    }
  }

  verifyControlNumber(pesel: Array<number>) {
    const weight = [9, 7, 3, 1, 9, 7, 3, 1, 9, 7];
    let sum = 0;
    const controlNumber = pesel[10];
    for (let i = 0; i < weight.length; i++) {
      sum += (pesel[i] * weight[i]);
    }
    sum = sum % 10;
    return sum === controlNumber;
  }

  getDate(pesel: Array<number>) {
    this.year = this.getYear(pesel);
    this.month = this.getMonth(pesel);
    this.day = this.getDay(pesel);
  }

  verifyDate(y: number, m: number, d: number) {
    const dt = new Date(y, m - 1, d);
    return dt.getDate() === d &&
          dt.getMonth() === m - 1 &&
          dt.getFullYear() === y;
  }

  getMonth(pesel: Array<number>) {
    return (pesel[2] % 2) * 10 + pesel[3];
  }

  getDay(pesel: Array<number>) {
    return pesel[4] * 10 + pesel[5];
  }

  getYear(pesel: Array<number>) {
    let year = 1900 + pesel[0] * 10 + pesel[1];

    if (pesel[2] >= 8) {
      // Dates in the XIX century
      year -= 100;
    } else if (pesel[2] >= 2) {
      // Dates in the XXI, XXII and XXIII  century
      year += Math.floor(pesel[2] / 2) * 100;
    }

    return year;
  }

}
