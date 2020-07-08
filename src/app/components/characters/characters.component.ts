import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { AppState } from '../../store/models/appState';
import { Character } from '../../store/models/character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass'],
})
export class CharactersComponent implements OnInit {
  characters$: Observable<Array<Character>>;
  sliceStart: number = 0;
  sliceEnd: number = 10;
  pageNr: number = 1;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch({ type: '[CHARACTERS] load' });
    this.characters$ = this.store.select(store => store.characters.content)
  }
  forward(){
    this.sliceStart += 10;
    this.sliceEnd += 10;
    this.pageNr += 1;
  }
  backward(){
    this.sliceStart -= 10;
    this.sliceEnd -= 10;
    this.pageNr -= 1;
  }

}
