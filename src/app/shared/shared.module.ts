import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { ToCelciusPipe } from './pipes/to-celcius.pipe';
import { TemperaturePipe } from './pipes/temperature.pipe';
import { TimePipe } from './pipes/time.pipe';



@NgModule({
  declarations: [
    ToCelciusPipe,
    TemperaturePipe,
    TimePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    FormsModule,
    ToCelciusPipe,
    TemperaturePipe,
    TimePipe
  ]
})
export class SharedModule { }
