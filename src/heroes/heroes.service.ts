import { Injectable } from '@nestjs/common';

@Injectable()
export class HeroesService {
    private readonly heroes = [
    { id: 'iron-man', displayName: 'Iron Man', role: 'TECH' },
    { id: 'thor', displayName: 'Thor Odinson', role: 'WARRIOR' },
    { id: 'black-widow', displayName: 'Black Widow', role: 'AGILE' },
  ];

  findAll(searchTerm?: string) {
    const term = searchTerm?.trim().toLowerCase() ?? '';
    if (!term) {
      return this.heroes;
    }
    return this.heroes.filter((hero) =>
      hero.displayName.toLowerCase().includes(term),
    );
  }
}
