import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ToCelciusPipe } from './pipes/to-celcius.pipe';
import { TemperaturePipe } from './pipes/temperature.pipe';
import { TimePipe } from './pipes/time.pipe';
import { FormErrorComponent } from './components/form-error/form-error.component';

@NgModule({
  declarations: [
    ToCelciusPipe,
    TemperaturePipe,
    TimePipe,
    FormErrorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormsModule,
    ToCelciusPipe,
    TemperaturePipe,
    TimePipe,
    ReactiveFormsModule,
    FormErrorComponent,
  ]
})
export class SharedModule { }
