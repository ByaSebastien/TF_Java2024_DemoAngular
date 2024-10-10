import {Component, EventEmitter, Input, Output} from '@angular/core';
import {GameModel} from '../../models/game.model';

@Component({
  selector: 'app-confirm-delete-game',
  templateUrl: './confirm-delete-game.component.html',
  styleUrl: './confirm-delete-game.component.scss'
})
export class ConfirmDeleteGameComponent {

  @Input({required:true})
  game!: GameModel;

  @Output()
  private confirmEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  triggerConfirmEvent(wantToDelete: boolean) {
    this.confirmEvent.emit(wantToDelete);
  }
}
