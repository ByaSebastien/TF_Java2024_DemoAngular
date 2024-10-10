import { Injectable } from '@angular/core';
import {GameModel} from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private games: GameModel[] = [
    {id: 1, title: 'Devil may cry 5', playerMax: 3, releaseDate: new Date(2019,2,8)},
    {id: 2, title: 'Dragon ball sparking zero', playerMax: 2, releaseDate: new Date(2024,9,11)},
    {id: 3, title: 'The witcher', playerMax: 1, releaseDate: new Date(2015,4,19)},
  ];

  constructor() { }

  getGames(): GameModel[] {
    return this.games;
  }

  getById(id: number): GameModel | undefined {
    return this.games.find(game => game.id === id);
  }

  addGame(newGameModel: GameModel){
    this.games.push(newGameModel);
  }

  removeGame(id: number) {
    let game : GameModel | undefined = this.getById(id);
    if(game){
      this.games.splice(this.games.indexOf(game), 1);
    }
  }
}
