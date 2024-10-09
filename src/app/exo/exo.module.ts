import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExoRoutingModule } from './exo-routing.module';
import { ExoTimerComponent } from './exo-timer/exo-timer.component';
import {SharedModule} from "../shared/shared.module";
import { ExoShoppingListComponent } from './exo-shopping-list/exo-shopping-list.component';
import { ShoppingListComponent } from './exo-shopping-list/shopping-list/shopping-list.component';


@NgModule({
  declarations: [
    ExoTimerComponent,
    ExoShoppingListComponent,
    ShoppingListComponent
  ],
    imports: [
        CommonModule,
        ExoRoutingModule,
        SharedModule
    ]
})
export class ExoModule { }
