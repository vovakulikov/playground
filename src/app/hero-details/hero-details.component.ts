import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../shared/hero';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from './../shared/hero.service';
import {trigger, state, animate, style, transition} from '@angular/core';
import { getAnimationConfig } from './../shared/animation-config';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css'],
  animations: [getAnimationConfig()],
  host: {
    '[@openClose]': 'true',
    'style': 'display: block;'
  }
})
export class HeroDetailsComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    console.log(this.route.params);
    this.route.params.subscribe(params => {
      const id = +params['id']; // (+) converts string 'id' to a number
      console.log(id);

      this.hero = this.heroService.getHero(id);
      // In a real app: dispatch action to load the details here.
    });
  }

  goBack(){
    this.location.back();
  }

}
