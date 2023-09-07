import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HeroesComponent } from "./heroes.component";
import { HeroListComponent } from "./hero-list/hero-list.component";
import { HeroSearchComponent } from "./hero-search/hero-search.component";

const routes: Routes = [
  {
    path: '', 
    component: HeroesComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: HeroListComponent,
      },
      {
        path: 'search',
        component: HeroSearchComponent,
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class HeroesRoutingModule {}