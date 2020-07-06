import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { AppState } from '../../store/models/appState';
import { Character } from '../../store/models/character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass'],
})
export class CharactersComponent implements OnInit, OnDestroy {
  characters$: Observable<Array<Character>>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch({ type: '[CHARACTERS] load' });
    this.characters$ = this.store.select(store => store.characters.content)
  }

  ngOnDestroy(): void {}
}
