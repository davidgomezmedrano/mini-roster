import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../models/hero.model';

@Injectable({ providedIn: 'root' })
export class HeroesService {
  private readonly baseUrl = 'http://localhost:3000';

  constructor(private readonly http: HttpClient) {}

  getHeroes(searchTerm = ''): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`, {
      params: { searchTerm },
    });
  }
}