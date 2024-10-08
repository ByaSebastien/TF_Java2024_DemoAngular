import { Component } from '@angular/core';
import {ProductModel} from './models/product.model';

@Component({
  selector: 'app-demo-directives',
  templateUrl: './demo-directives.component.html',
  styleUrl: './demo-directives.component.scss'
})
export class DemoDirectivesComponent {

  isConnected: boolean = false;
  now: Date = new Date();
  isDayTime: boolean = true;

  products: ProductModel[] = [
    {id: 1, name : 'Mangues', price: 42},
    {id: 2, name : 'Cerise', price: 1},
    {id: 3, name : 'Fraises', price: 3},
  ];

  get day() {
    return this.now.getDay();
  }

  togleIsConnected(){
    this.isConnected = !this.isConnected;
  }

  togleIsDayTime() {
    this.isDayTime = !this.isDayTime;
  }
}
