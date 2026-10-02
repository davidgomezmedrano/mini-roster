import { Component, OnInit, signal } from '@angular/core';
import { Hero } from './models/hero.model';
import { HeroesService } from './service/heroes.service';

type PageStatus = 'loading' | 'empty' | 'data' | 'error';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  readonly heroes = signal<Hero[]>([]);
  readonly error = signal<string | null>(null);
  readonly status = signal<PageStatus>('loading');

  constructor(private readonly heroesService: HeroesService) {}

  ngOnInit(): void {
    this.loadHeroes();
  }

  onSearch(searchTerm: string): void {
    this.loadHeroes(searchTerm);
  }

  private loadHeroes(searchTerm = ''): void {
    this.status.set('loading');
    this.error.set(null);
    this.heroesService.getHeroes(searchTerm).subscribe({
      next: (heroes) => {
        this.heroes.set(heroes);
        this.status.set(heroes.length ? 'data' : 'empty');
      },
      error: () => {
        this.status.set('error');
        this.error.set('No se pudieron cargar los héroes');
      },
    });
  }
}
