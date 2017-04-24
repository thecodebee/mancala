import { Component } from '@angular/core';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  pits = Array(12).fill(null);
  player = '1';
  winner = null;

  get gameStatusMessage(){
    return this.winner? `Player ${this.winner} has won!` : 
    `Player ${this.player}'s turn`;
  }
}
