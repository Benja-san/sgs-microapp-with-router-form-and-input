import { Component, inject } from '@angular/core';
import { Game } from '../game';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { GameCardComponent } from '../game-card/game-card.component';
import { Commentary } from '../model/commentary/commentary';
import { CommentaryCardComponent } from '../commentary-card/commentary-card.component';
import { GameService } from '../service/game/game.service';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [GameCardComponent, CommentaryCardComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {
  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);
  private gameService: GameService = inject(GameService);

  gameId: number | undefined;
  game: Game | undefined;

  public commentaries: Commentary[] = [
    new Commentary('John', 'This is a great game!'),
    new Commentary('Jane', 'I love this game!'),
    new Commentary('Jack', 'This is a terrible game!'),
    new Commentary('Jill', 'I hate this game!'),
    new Commentary('Jim', 'This game is ok!'),
  ];

  findGame(): void {
    this.game = this.gameService.games.find((game) => game.id === this.gameId);
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.gameId = parseInt(params.get('gameId') as string);
      if (isNaN(this.gameId)) {
        this.router.navigate(['home']);
      }
      this.findGame();
      console.log(this.game);
      if (!this.game) {
        this.router.navigate(['home']);
      }
    });
  }
}
