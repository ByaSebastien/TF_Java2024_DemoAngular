import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExoRoutingModule } from './exo-routing.module';
import { ExoTimerComponent } from './exo-timer/exo-timer.component';
import {SharedModule} from "../shared/shared.module";
import { ExoShoppingListComponent } from './exo-shopping-list/exo-shopping-list.component';
import { ShoppingListComponent } from './exo-shopping-list/shopping-list/shopping-list.component';
import { ExoServiceComponent } from './exo-service/exo-service.component';
import { ConfirmDeleteGameComponent } from './exo-service/components/confirm-delete-game/confirm-delete-game.component';


@NgModule({
  declarations: [
    ExoTimerComponent,
    ExoShoppingListComponent,
    ShoppingListComponent,
    ExoServiceComponent,
    ConfirmDeleteGameComponent
  ],
    imports: [
        CommonModule,
        ExoRoutingModule,
        SharedModule
    ]
})
export class ExoModule { }
