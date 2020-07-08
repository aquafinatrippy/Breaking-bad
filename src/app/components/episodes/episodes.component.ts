import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';


import { Episode } from '../../store/models/episode';
import { EpisodeState } from 'src/app/store/reducers/episodes.reducer';




@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.sass']
})
export class EpisodesComponent implements OnInit {

  episodes$: Observable<Array<Episode>>

  constructor(private store: Store<EpisodeState>) { }

  ngOnInit(): void {
    this.store.dispatch({type: '[EPISODES] load'})
    this.episodes$ = this.store.select(store => store.content)
  }

}
