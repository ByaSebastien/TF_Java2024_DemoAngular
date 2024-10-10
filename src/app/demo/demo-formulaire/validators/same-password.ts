import {AbstractControl, ValidatorFn} from '@angular/forms';

export const samePassword = (): ValidatorFn | null => {
  return (control: AbstractControl) => {

    //Quand validator sur champs multiples le control doit être le FormGroup au complet
    let password = control.get('password')?.value;
    let confirmPassword = control.get('confirmPassword')?.value;

    if (!password || !confirmPassword) {
      return null;
    }

    if (password === confirmPassword) {
      return null;
    }

    return {samePassword: true};
  };
}
