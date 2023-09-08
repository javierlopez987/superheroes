import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Hero } from './hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  public teamChanged: Subject<Hero[]>;
  private team: Hero[] = [
    new Hero(
      "batman", 
      "https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg",
      {
        "intelligence": "100",
        "strength": "26",
        "speed": "27",
        "durability": "50",
        "power": "47",
        "combat": "100"
      }
    ),
    new Hero(
      "Daredevil", 
      "https://www.superherodb.com/pictures2/portraits/10/100/52.jpg",
      {
        "intelligence": "75",
        "strength": "13",
        "speed": "25",
        "durability": "35",
        "power": "61",
        "combat": "100"
      }
    ),
    new Hero(
      "Cloak", 
      "https://www.superherodb.com/pictures2/portraits/10/100/46.jpg",
      {
        "intelligence": "63",
        "strength": "10",
        "speed": "47",
        "durability": "64",
        "power": "100",
        "combat": "56"
      }
    ),
    new Hero(
      "Colossus", 
      "https://www.superherodb.com/pictures2/portraits/10/100/48.jpg",
      {
        "intelligence": "63",
        "strength": "83",
        "speed": "33",
        "durability": "100",
        "power": "45",
        "combat": "80"
      }
    ),
    new Hero(
      "Crimson Dynamo", 
      "https://www.superherodb.com/pictures2/portraits/10/100/1093.jpg",
      {
        "intelligence": "null",
        "strength": "65",
        "speed": "null",
        "durability": "null",
        "power": "null",
        "combat": "null"
      }
    ),
    new Hero(
      "Cyborg Superman", 
      "https://www.superherodb.com/pictures2/portraits/10/100/667.jpg",
      {
        "intelligence": "75",
        "strength": "93",
        "speed": "92",
        "durability": "100",
        "power": "100",
        "combat": "80"
      }
    )
  ];

  constructor() {
    this.teamChanged = new Subject();
  }

  getTeam() {
    return this.team.slice();
  }

  add(hero: Hero) {
    this.team.push(hero);
    this.teamChanged.next(this.team);
  }

  delete(hero: Hero) {
    const newTeam = this.team.filter((h) => h.name != hero.name);
    this.team = newTeam;
    this.teamChanged.next(this.team);
  }
}
