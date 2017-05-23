import { Component } from '@angular/core';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  pits = Array(12).fill(4);
  mancala1 = 0;
  mancala2 = 0;

  player = '1';
  winner = null;

  get gameStatusMessage(){
    return this.winner? `Player ${this.winner} has won!` : 
    `Player ${this.player}'s turn`;
  }

  handleMove(position){
    console.log("clicked ==> ", position);
    if(!this.winner && !this.pits[position] ){
      //this.pits[position] = this.player;
      this.fillPits(position);
      if(this.winnigMove()) {
        this.winner = this.player;
      }
      this.player = this.player === '1' ? '2' : '1';
    }
  }

  fillPits(startpos: number) {
    
  }

  winnigMove() {
    
  }

  restartGame() {
    
  }
}
