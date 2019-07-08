import {FormControl} from '@angular/forms';

export class CustomValidators {

  ifPasswordsMatch(pass: string, c: FormControl) {
    return c.value === pass ? null : {
      doesntMatch: {
        validate: false
      }
    };
  }

}
