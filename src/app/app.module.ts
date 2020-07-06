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





@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({characters: CharacterReducer }, {}),
    HttpClientModule,
    MatInputModule,
    EffectsModule.forRoot([CharEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
