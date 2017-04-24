import { Component, Input } from '@angular/core';

@Component({
  selector: 'mancala',
  templateUrl: './mancala.component.html',
  styleUrls: ['./mancala.component.scss']
})
export class MancalaComponent {
  @Input()
  stonecount : number;
}
