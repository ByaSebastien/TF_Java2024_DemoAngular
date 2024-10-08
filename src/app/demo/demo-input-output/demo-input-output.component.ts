import { Component } from '@angular/core';
import {ProductModel} from '../demo-directives/models/product.model';

@Component({
  selector: 'app-demo-input-output',
  templateUrl: './demo-input-output.component.html',
  styleUrl: './demo-input-output.component.scss'
})
export class DemoInputOutputComponent {

  products: ProductModel[] = [
    {id: 1, name : 'Mangues', price: 42},
    {id: 2, name : 'Cerise', price: 1},
    {id: 3, name : 'Fraises', price: 3},
  ];

  selectedProducts?: ProductModel;

  setSelectedProducts(products: ProductModel) {
    this.selectedProducts = products;
  }

  reactToConfirmDialog(wantToDelete: boolean) {
    if (wantToDelete) {
      let index = this.products.indexOf(this.selectedProducts!);
      this.products.splice(index, 1);
    }
    this.selectedProducts = undefined;
  }
}
