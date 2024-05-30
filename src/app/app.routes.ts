import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { AddGameComponent } from './add-game/add-game.component';
import { HarryPotterComponent } from './harry-potter/harry-potter.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'game/:gameId',
    component: GameComponent,
  },
  {
    path: 'add-game',
    component: AddGameComponent,
  },
  {
    path: 'harry-potter',
    component: HarryPotterComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
