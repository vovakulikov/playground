import { Injectable } from '@angular/core';
import { HEROES } from './heroes-list';
import { Hero } from './hero';

@Injectable()
export class HeroService {

  constructor() { }


  getHeroes():Hero[]{
    return HEROES;
  }

  getHero(id: number){
    return HEROES.find(hero => hero.id === id)
  }
}
