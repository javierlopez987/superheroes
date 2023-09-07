import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';

import { Hero } from '../hero.model';
import { HeroApiService } from '../../shared/services/hero-api.service';
import { HeroDto } from '../hero-dto.model';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heroes: Hero[] = [
    {
        "name": "Cyborg Superman",
        "powerstats": {
            "intelligence": "75",
            "strength": "93",
            "speed": "92",
            "durability": "100",
            "power": "100",
            "combat": "80"
        },
        "imagePath": "https://www.superherodb.com/pictures2/portraits/10/100/667.jpg"
    },
    {
        "name": "Superman",
        "powerstats": {
            "intelligence": "94",
            "strength": "100",
            "speed": "100",
            "durability": "100",
            "power": "100",
            "combat": "85"
        },
        "imagePath": "https://www.superherodb.com/pictures2/portraits/10/100/791.jpg"
    }
];
  searchForm: FormGroup;

  constructor(private heroApiService: HeroApiService) {
    this.searchForm = new FormGroup({
      'name': new FormControl(null)
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const name = this.searchForm.value.name;
    this.heroApiService.searchByName(name)
      .pipe(map((data: any) => data.results))
      .subscribe((response: HeroDto[]) => {
        this.heroes = response.map((h) => new Hero(h.name, h.image.url, h.powerstats))
      });
  }
}
