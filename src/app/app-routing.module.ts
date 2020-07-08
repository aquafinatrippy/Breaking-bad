import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersComponent } from './components/characters/characters.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { EpisodesComponent } from './components/episodes/episodes.component';

const routes: Routes = [
  { path: '', component: CharactersComponent },
  { path: 'x', component: SearchResultComponent },
  { path: 'episodes', component: EpisodesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
