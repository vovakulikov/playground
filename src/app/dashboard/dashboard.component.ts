import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/hero';
import { HeroService } from '../shared/hero.service';
import {trigger, state, animate, style, transition} from '@angular/core';
import { getAnimationConfig } from './../shared/animation-config';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [getAnimationConfig()],
  host: {
    '[@openClose]': 'true',
    'style': 'display: block;'
  },
})
export class DashboardComponent implements OnInit {

  heroes: Hero[];
  constructor(private heroService: HeroService) { }

  ngOnInit() {

    this.heroes = this.heroService.getHeroes().slice(1,5);
    console.log(this.heroes);
  }

}
