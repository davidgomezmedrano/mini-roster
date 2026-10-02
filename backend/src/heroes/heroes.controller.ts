import { Controller , Get, Query } from '@nestjs/common';
import { HeroesService } from './heroes.service.js';

@Controller('heroes')
export class HeroesController {
    constructor(private readonly heroesService: HeroesService) {}

  @Get()
  getHeroes(@Query('searchTerm') searchTerm?: string) {
    return this.heroesService.findAll(searchTerm);
  }
}
