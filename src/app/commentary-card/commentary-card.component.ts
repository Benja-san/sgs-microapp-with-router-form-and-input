import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() eventEmmiter: EventEmitter<number> = new EventEmitter();
  like: number = 0;

  sendLikeState() {
    this.eventEmmiter.emit(this.like);
  }

  onLikeClick() {
    if (this.like === 1) {
      this.like--;
    } else {
      this.like++;
    }
    this.sendLikeState();
  }
}
