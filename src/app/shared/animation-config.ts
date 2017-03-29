import {trigger, state, animate, style, transition} from '@angular/core';

export function getAnimationConfig(){
  return smooth();
}

function smooth(){
  return trigger(
    'openClose',
    [
      transition(":enter", [
        style({
          opacity: 0,
          transform: "translateX(10px)",
          transition: 'opacity 200ms ease 0s, transform 300ms ease-in-out 0s '
        }),
        animate('0s', style({
          opacity: 1,
          transform: "translateX(0)"
        }))
      ]),
      transition(":leave", [
        //animate('2000ms', style({ opacity: 0 }))
      ])
    ])
}
