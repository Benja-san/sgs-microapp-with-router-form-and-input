import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HarryPotterService {
  private http: HttpClient = inject(HttpClient);
  private url: string = 'https://hp-api.herokuapp.com/api/';

  getAllCharacters(): Observable<any> {
    return this.http.get(`${this.url}characters`);
  }
}
