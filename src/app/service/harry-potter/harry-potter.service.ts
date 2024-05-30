import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { HPCharacters } from '../../model/HPCharacters/hpcharacters';

@Injectable({
  providedIn: 'root',
})
export class HarryPotterService {
  private http: HttpClient = inject(HttpClient);
  private url: string = 'https://hp-api.herokuapp.com/api/';

  getAllCharacters(): Observable<HPCharacters[]> {
    return this.http.get<any>(`${this.url}characters`).pipe(
      map((data) =>
        data.map((character: HPCharacters) => {
          return new HPCharacters(
            character.name,
            character.actor,
            character.image,
            character.house
          );
        })
      )
    );
  }
}
