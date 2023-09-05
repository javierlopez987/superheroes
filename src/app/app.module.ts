import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { HeroItemComponent } from './heroes/hero-list/hero-item/hero-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroListComponent,
    HeroItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
