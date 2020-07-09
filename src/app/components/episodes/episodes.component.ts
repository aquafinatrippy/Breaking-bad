import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Episode } from '../../store/models/episode';
import { AppState } from '../../store/models/appState';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.sass'],
})
export class EpisodesComponent implements OnInit {
  episodes$: Observable<Array<Episode>>;
  start: number = 0;
  end: number = 10;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch({ type: '[EPISODES] load' });
    this.episodes$ = this.store.select(store => store.episodes.content)
  }
}
