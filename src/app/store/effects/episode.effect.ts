import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { of } from 'rxjs';
import { GetDataService } from '../../Services/get-data.service';

import {
  LoadEpisodes,
  LoadEpisodesFail,
  LoadEpisodesSuccess,
  EpisodesActionType,
} from '../actions/episodes.action';

@Injectable()
export class EpisodeEffects {
  @Effect() loadEpisodesEff = this.actions$.pipe(
    ofType<LoadEpisodes>(EpisodesActionType.LOAD_EPISODES),
    mergeMap(() =>
      this.charServ.getEpisodes().pipe(
        map((data: any) => {
          console.log(data);
          return new LoadEpisodesSuccess(data);
        }),
        catchError((error) => of(new LoadEpisodesFail(error)))
      )
    )
  );

  constructor(private actions$: Actions, private charServ: GetDataService) {}
}
