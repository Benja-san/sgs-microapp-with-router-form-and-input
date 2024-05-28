import { Component, inject } from '@angular/core';
import { Game } from '../game';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { GameCardComponent } from '../game-card/game-card.component';
import { Commentary } from '../model/commentary/commentary';
import { CommentaryCardComponent } from '../commentary-card/commentary-card.component';

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

  gameId: number | undefined;
  game: Game | undefined;

  public games: Game[] = [
    new Game(
      1,
      'Vanilla',
      'https://bnetcmsus-a.akamaihd.net/cms/blog_thumbnail/z6/Z69HID4AX12Z1565217144858.jpg',
      'Bla bla bla'
    ),
    new Game(
      2,
      'Burning Crusade',
      'https://bnetcmsus-a.akamaihd.net/cms/blog_header/ze/ZE5YC83V7D121622067139361.jpg',
      'Bla bla bla'
    ),
    new Game(
      3,
      'Wrath of the lich king',
      'https://bnetcmsus-a.akamaihd.net/cms/blog_header/3k/3KX676YJ7BIB1658764099222.jpg',
      'Bla bla bla'
    ),
  ];

  public commentaries: Commentary[] = [
    new Commentary('John', 'This is a great game!'),
    new Commentary('Jane', 'I love this game!'),
    new Commentary('Jack', 'This is a terrible game!'),
    new Commentary('Jill', 'I hate this game!'),
    new Commentary('Jim', 'This game is ok!'),
  ];

  findGame(): void {
    this.game = this.games.find((game) => game.id === this.gameId);
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
