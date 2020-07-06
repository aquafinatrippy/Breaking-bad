import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { of } from 'rxjs';
import { GetDataService } from '../../Services/get-data.service';

import {
    LoadCharacters,
    LoadCharactersSuccess,
    LoadCharactersFail,
    CharacterActionTypes,
} from '../actions/character.action';

@Injectable()
export class CharEffects {
  @Effect() loadMovies = this.actions$.pipe(
    ofType<LoadCharacters>(CharacterActionTypes.LOAD_CHARACTERS),
    mergeMap(() =>
      this.charServ.getCharacters().pipe(
        map((data: any) => {
            console.log(data)
          return new LoadCharactersSuccess(data);
        }),
        catchError((error) => of(new LoadCharactersFail(error)))
      )
    )
  );

  constructor(private actions$: Actions, private charServ: GetDataService) {}
}