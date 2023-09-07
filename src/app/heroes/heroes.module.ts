import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HeroesComponent } from './heroes.component';
import { HeroItemComponent } from './hero-list/hero-item/hero-item.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';


@NgModule({
  declarations: [
    HeroesComponent,
    HeroListComponent,
    HeroItemComponent,
    HeroSearchComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    HeroesComponent,
    HeroListComponent,
    HeroItemComponent
  ]
})
export class HeroesModule { }
