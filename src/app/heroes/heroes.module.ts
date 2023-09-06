import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesComponent } from './heroes.component';
import { HeroItemComponent } from './hero-list/hero-item/hero-item.component';
import { HeroListComponent } from './hero-list/hero-list.component';


@NgModule({
  declarations: [
    HeroesComponent,
    HeroListComponent,
    HeroItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeroesComponent,
    HeroListComponent,
    HeroItemComponent
  ]
})
export class HeroesModule { }
