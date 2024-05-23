import { Component, Input } from '@angular/core';
import { Game } from '../game';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss',
})
export class GameCardComponent {
  @Input() childGame: Game = new Game(
    0,
    'placeholder name',
    'https://cdna.artstation.com/p/assets/images/images/001/112/298/large/oliver-chipping-babymurlocx900.jpg?1440346277',
    'argllllll'
  );
}
