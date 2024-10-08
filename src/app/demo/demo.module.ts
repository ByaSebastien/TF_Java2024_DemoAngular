import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoBindingsComponent } from './demo-bindings/demo-bindings.component';
import { DemoComponent } from './demo.component';
import {FormsModule} from '@angular/forms';
import { DemoPipesComponent } from './demo-pipes/demo-pipes.component';
import {SharedModule} from '../shared/shared.module';
import { DemoDirectivesComponent } from './demo-directives/demo-directives.component';


@NgModule({
  declarations: [
    DemoBindingsComponent,
    DemoComponent,
    DemoPipesComponent,
    DemoDirectivesComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    SharedModule
  ]
})
export class DemoModule { }
