import { Component } from '@angular/core';
import { Game } from '../game';
import { RouterLink } from '@angular/router';
import { GameCardComponent } from '../game-card/game-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, GameCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
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
}
