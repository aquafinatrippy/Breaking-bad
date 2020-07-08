import { Action } from '@ngrx/store';
import { Episode } from '../models/episode';

export enum EpisodesActionType {
  LOAD_EPISODES = '[EPISODES] load',
  LOAD_EPISODES_SUCCESS = '[EPISODES] Load episodes',
  LOAD_EPISODES_FAIL = '[EPISODES] Load episodes failed',
}

export class LoadEpisodes implements Action {
  readonly type = EpisodesActionType.LOAD_EPISODES;
}

export class LoadEpisodesSuccess implements Action {
  readonly type = EpisodesActionType.LOAD_EPISODES_SUCCESS;
  constructor(public payload: Array<Episode>) {}
}

export class LoadEpisodesFail implements Action {
  readonly type = EpisodesActionType.LOAD_EPISODES_FAIL;
  constructor(public payload: Error) {}
}

export type EpisodesActions =
  | LoadEpisodes
  | LoadEpisodesSuccess
  | LoadEpisodesFail;
