import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { ToCelciusPipe } from './pipes/to-celcius.pipe';
import { TemperaturePipe } from './pipes/temperature.pipe';



@NgModule({
  declarations: [
    ToCelciusPipe,
    TemperaturePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    FormsModule,
    ToCelciusPipe,
    TemperaturePipe
  ]
})
export class SharedModule { }
