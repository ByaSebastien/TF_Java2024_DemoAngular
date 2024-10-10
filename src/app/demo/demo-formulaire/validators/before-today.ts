import {AbstractControl, ValidatorFn} from '@angular/forms';

export const beforeToday = (): ValidatorFn | null => {

  return (control: AbstractControl) => {

    if(!control.value){
      return null;
    }

    let birthdate : Date = new Date(control.value);
    let now : Date = new Date();

    if(birthdate < now){
      return null;
    }

    return {beforeToday: true};
  }
}
