import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductModel} from '../../demo-directives/models/product.model';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.scss'
})
export class ConfirmDialogComponent {

  @Input({required: true})
  product!: ProductModel;

  @Output()
  confirmEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  confirm(wantToDelete: boolean){
    this.confirmEvent.emit(wantToDelete);
  }
}
