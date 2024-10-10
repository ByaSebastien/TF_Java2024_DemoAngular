import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoBindingsComponent } from './demo-bindings/demo-bindings.component';
import { DemoComponent } from './demo.component';
import {FormsModule} from '@angular/forms';
import { DemoPipesComponent } from './demo-pipes/demo-pipes.component';
import {SharedModule} from '../shared/shared.module';
import { DemoDirectivesComponent } from './demo-directives/demo-directives.component';
import { DemoInputOutputComponent } from './demo-input-output/demo-input-output.component';
import { ConfirmDialogComponent } from './demo-input-output/confirm-dialog/confirm-dialog.component';
import { DemoServiceComponent } from './demo-service/demo-service.component';
import { DemoFormulaireComponent } from './demo-formulaire/demo-formulaire.component';


@NgModule({
  declarations: [
    DemoBindingsComponent,
    DemoComponent,
    DemoPipesComponent,
    DemoDirectivesComponent,
    DemoInputOutputComponent,
    ConfirmDialogComponent,
    DemoServiceComponent,
    DemoFormulaireComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    SharedModule
  ]
})
export class DemoModule { }
