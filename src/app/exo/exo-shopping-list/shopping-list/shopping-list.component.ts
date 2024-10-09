import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ShoppingProductModel} from '../models/shopping-product.model';
import {ActionType} from '../enums/action-type';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss'
})
export class ShoppingListComponent {

  protected readonly ActionType = ActionType;

  @Input({required: true})
  products!: ShoppingProductModel[];

  @Output()
  private shoppingEvent: EventEmitter<{actionType: ActionType, id: number}> = new EventEmitter();

  triggerEvent(actionType: ActionType, id: number) {

    this.shoppingEvent.emit({
      actionType: actionType,
      id: id,
    });
  }
}
