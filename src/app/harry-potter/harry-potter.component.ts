import { Component, inject } from '@angular/core';
import { HarryPotterService } from '../service/harry-potter/harry-potter.service';
import { HPCharacters } from '../model/HPCharacters/hpcharacters';

@Component({
  selector: 'app-harry-potter',
  standalone: true,
  imports: [],
  templateUrl: './harry-potter.component.html',
  styleUrl: './harry-potter.component.scss',
})
export class HarryPotterComponent {
  hpService: HarryPotterService = inject(HarryPotterService);
  characters: HPCharacters[] = [];

  constructor() {}

  ngOnInit() {
    this.hpService
      .getAllCharacters()
      .subscribe((data) => (this.characters = data));
    console.log(this.characters);
  }
}
