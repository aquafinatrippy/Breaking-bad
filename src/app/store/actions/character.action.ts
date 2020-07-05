import { Action } from '@ngrx/store';
import { Character } from '../models/character';
import { type } from 'os';

export enum CharacterActionTypes {
  LOAD_CHARACTERS = '[CHARACTERS]',
  LOAD_CHARACTERS_SUCCESS = '[CHARACTERS] Load characters',
  LOAD_CHARACTERS_FAIL = '[CHARACTERS Load characters failed',
}

export class LOAD_CHARACTERS implements Action {
  readonly type = CharacterActionTypes.LOAD_CHARACTERS;
}

export class LOAD_CHARACTERS_SUCCESS implements Action {
  readonly type = CharacterActionTypes.LOAD_CHARACTERS_SUCCESS;
  constructor(public payload: Array<Character>) {}
}

export class LOAD_CHARACTERS_FAIL implements Action {
  readonly type = CharacterActionTypes.LOAD_CHARACTERS_FAIL;
  constructor(public payload: Error) {}
}

export type CharacterActions =
  | LOAD_CHARACTERS
  | LOAD_CHARACTERS_SUCCESS
  | LOAD_CHARACTERS_FAIL;
