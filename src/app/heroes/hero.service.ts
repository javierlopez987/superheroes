import { Injectable } from '@angular/core';
import { Hero } from './hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroes: Hero[] = [
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
    )
  ];

  constructor() {}

  getHeroes() {
    return this.heroes.slice();
  }
}
