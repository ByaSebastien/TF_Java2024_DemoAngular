import {Component} from '@angular/core';
import {ShoppingProductModel} from './models/shopping-product.model';
import {ActionType} from './enums/action-type';

@Component({
  selector: 'app-exo-shopping-list',
  templateUrl: './exo-shopping-list.component.html',
  styleUrl: './exo-shopping-list.component.scss'
})
export class ExoShoppingListComponent {

  productName: string = '';
  productQuantity: number = 1;
  private nextId: number = 4;

  products: ShoppingProductModel[] = [
    {id: 1, name: 'PS5', quantity: 1},
    {id: 2, name: 'XBOX', quantity: 1},
    {id: 3, name: 'Nitendo switch', quantity: 1},
  ];

  addProduct() {

    if (!this.productName.trim() || this.productQuantity <= 0) {
      return;
    }

    let existingProduct: ShoppingProductModel | undefined = this.products.find(p => p.name.toLowerCase() === this.productName.toLowerCase());

    if (existingProduct) {
      existingProduct.quantity += this.productQuantity;
      return;
    }

    let product: ShoppingProductModel = {
      id: this.nextId++,
      name: this.productName,
      quantity: this.productQuantity,
    };

    this.products.push(product);
  }

  reactToShoppingEvent(info: { actionType: ActionType, id: number }) {

    switch (info.actionType) {
      case ActionType.MINUS_ONE:
        this.minusOne(info.id);
        break;
      case ActionType.PLUS_ONE:
        this.plusOne(info.id);
        break;
      case ActionType.DELETE:
        this.delete(info.id);
        break;
    }
  }

  private minusOne(id: number) {
    let product: ShoppingProductModel | undefined = this.products.find(p => p.id === id);
    if (!product) {
      return;
    }
    product.quantity -= 1;
    if (product.quantity <= 0) {
      this.delete(id);
    }
  }

  private plusOne(id: number) {
    let product: ShoppingProductModel | undefined = this.products.find(p => p.id === id);
    if (!product) {
      return;
    }
    product.quantity += 1;
  }

  private delete(id: number) {
    let product: ShoppingProductModel | undefined = this.products.find(p => p.id === id);
    if (!product) {
      return;
    }
    let index = this.products.indexOf(product);
    this.products.splice(index, 1);
  }
}
