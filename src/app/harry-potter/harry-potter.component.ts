import { Component, inject } from '@angular/core';
import { HarryPotterService } from '../service/harry-potter/harry-potter.service';

@Component({
  selector: 'app-harry-potter',
  standalone: true,
  imports: [],
  templateUrl: './harry-potter.component.html',
  styleUrl: './harry-potter.component.scss',
})
export class HarryPotterComponent {
  hpService: HarryPotterService = inject(HarryPotterService);

  constructor() {}

  ngOnInit() {
    this.hpService.getAllCharacters().subscribe((data) => console.log(data));
  }
}
