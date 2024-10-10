import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Person} from './models/person';
import {beforeToday} from './validators/before-today';
import {samePassword} from './validators/same-password';

@Component({
  selector: 'app-demo-formulaire',
  templateUrl: './demo-formulaire.component.html',
  styleUrl: './demo-formulaire.component.scss'
})
export class DemoFormulaireComponent {

  personForm: FormGroup;

  constructor(
    private readonly _fb: FormBuilder,
  ) {
    this.personForm = this._fb.group({
      lastname: [null, [Validators.required, Validators.maxLength(80)]],
      firstname: [null, [Validators.required, Validators.maxLength(123)]],
      birthdate: [null, [Validators.required, beforeToday()]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*+-=]).{8,}$/)]],
      confirmPassword: [null, [Validators.required]],
      phoneNumber: [null, [Validators.minLength(10),Validators.maxLength(10)]],
      siblings: [null, [Validators.required, Validators.min(0)]],
      country: [null, [Validators.required]],
      single: [false, [Validators.required]]
    },{validators: [samePassword()]});
  }

  submit() {

    this.personForm.markAllAsTouched();

    console.log(this.personForm);

    if(this.personForm.invalid) {
      console.log('Non valid');
      // this.personForm.get('password')?.reset();
      return;
    }

    console.log('Valid');

    let person: Person = this.personForm.value;

    // let p: Person = {
    //   firstname: this.personForm.get('firstname')?.value,
    //   ...
    // }
  }
}
