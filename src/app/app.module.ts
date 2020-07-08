import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterReducer } from './store/reducers/character.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CharEffects } from './store/effects/character.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { EpisodeEffects } from '../app/store/effects/episode.effect';
import { EpisodeReducer } from './store/reducers/episodes.reducer';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    CharactersComponent,
    SearchResultComponent,
    EpisodesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(
      { characters: CharacterReducer, episodes: EpisodeReducer },
      {}
    ),
    HttpClientModule,
    MatInputModule,
    EffectsModule.forRoot([CharEffects, EpisodeEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    MatIconModule,
    AppRoutingModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
