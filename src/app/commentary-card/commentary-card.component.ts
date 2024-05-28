import { Component, Input } from '@angular/core';
import { Commentary } from '../model/commentary/commentary';

@Component({
  selector: 'app-commentary-card',
  standalone: true,
  imports: [],
  templateUrl: './commentary-card.component.html',
  styleUrl: './commentary-card.component.scss',
})
export class CommentaryCardComponent {
  @Input() commentaryChild!: Commentary;
}
