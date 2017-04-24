import { Component, Input } from '@angular/core';

@Component({
  selector: 'pit',
  templateUrl: './pit.component.html',
  styleUrls: ['./pit.component.scss']
})
export class PitComponent {
  @Input()
  state: string;
}
