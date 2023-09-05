import { Component, Input, OnInit } from '@angular/core';

interface Hero {
  name: string;
  imagePath: string;
  powerstats: any;
}
@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.css']
})
export class HeroItemComponent implements OnInit {
  @Input() hero: Hero = { 
    name: "batman", 
    imagePath: "https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg", 
    powerstats: Object.entries({
      "intelligence": "100",
      "strength": "26",
      "speed": "27",
      "durability": "50",
      "power": "47",
      "combat": "100"
    }) 
  };

  constructor() { }

  ngOnInit(): void {
  }

}
