import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
  styles: ['.fs-7 { font-size: 10px; text-decoration: underline; cursor: pointer};']
})
export class CardComponent implements OnInit {
  ngOnInit(): void {
    if (!this.gif) throw new Error('Gif promerty is requiered.');
  }

  @Input()
  public gif!: Gif; // En teoria, siempre habrá un gif
}
