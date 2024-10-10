import { Component } from '@angular/core';
import {GameService} from './services/game.service';
import {GameModel} from './models/game.model';

@Component({
  selector: 'app-exo-service',
  templateUrl: './exo-service.component.html',
  styleUrl: './exo-service.component.scss'
})
export class ExoServiceComponent {

  selectedGame?: GameModel;
  games: GameModel[];

  constructor(
    private readonly _gameService : GameService,
  ) {
    this.games = this._gameService.getGames();
  }

  selectGame(id: number) {
    this.selectedGame = this._gameService.getById(id);
  }

  reactToDeleteEvent(wantToDelete: boolean){
    if (wantToDelete){
      this._gameService.removeGame(this.selectedGame!.id);
    }
    this.selectedGame = undefined;
  }
}
