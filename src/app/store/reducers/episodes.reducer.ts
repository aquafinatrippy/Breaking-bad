import { Episode } from '../models/episode';
import {
  EpisodesActionType,
  EpisodesActions,
} from '../actions/episodes.action';

export interface EpisodeState {
  content: Episode[];
  loading: boolean;
  error: Error;
}

const initialState: EpisodeState = {
  content: [],
  loading: false,
  error: undefined,
};

export function EpisodeReducer(
  state: EpisodeState = initialState,
  action: EpisodesActions
) {
  switch (action.type) {
    case EpisodesActionType.LOAD_EPISODES:
      return {
        ...state,
        loading: true,
      };
    case EpisodesActionType.LOAD_EPISODES_SUCCESS:
      return {
        ...state,
        content: action.payload,
        loading: false,
      };
    case EpisodesActionType.LOAD_EPISODES_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
