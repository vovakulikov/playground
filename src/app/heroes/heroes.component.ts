import { Component } from '@angular/core';
import { Hero } from '../shared/hero';
import { HeroService } from '../shared/hero.service';
import { Router } from '@angular/router';
import {trigger, state, animate, style, transition} from '@angular/core';
import { getAnimationConfig } from './../shared/animation-config';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  animations: [getAnimationConfig()],
  host: {
    '[@openClose]': 'true',
    'style': 'display: block;'
  }
})

export class HeroesComponent {
  title = 'Tour of hero: ';
  heroes: Hero[];
  constructor(private heroService: HeroService,
              private router: Router) { }

  ngOnInit(){
    this.heroes = this.heroService.getHeroes();
  }
  selectedHero: Hero;

  onSelectHero(hero:Hero){
    this.selectedHero = hero;
    console.log(hero)
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}

