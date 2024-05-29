import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GameCardComponent } from '../game-card/game-card.component';
import { GameService } from '../service/game/game.service';
import { Game } from '../game';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, GameCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private gameService: GameService = inject(GameService);
  public games: Game[] = [];

  ngOnInit() {
    this.games = this.gameService.games;
  }
}
