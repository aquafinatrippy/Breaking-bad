import { Action } from '@ngrx/store';
import { Character } from '../models/character';

export enum CharacterActionTypes {
  LOAD_CHARACTERS = '[CHARACTERS] load',
  LOAD_CHARACTERS_SUCCESS = '[CHARACTERS] Load characters',
  LOAD_CHARACTERS_FAIL = '[CHARACTERS] Load characters failed'
}

export class LoadCharacters implements Action {
  readonly type = CharacterActionTypes.LOAD_CHARACTERS;
}

export class LoadCharactersSuccess implements Action {
  readonly type = CharacterActionTypes.LOAD_CHARACTERS_SUCCESS;
  constructor(public payload: Array<Character>) {}
}

export class LoadCharactersFail implements Action {
  readonly type = CharacterActionTypes.LOAD_CHARACTERS_FAIL;
  constructor(public payload: Error) {}
}


export type CharacterActions =
  | LoadCharacters
  | LoadCharactersSuccess
  | LoadCharactersFail;
