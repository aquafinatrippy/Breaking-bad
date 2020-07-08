import { EpisodeState } from '../reducers/episodes.reducer';


export interface AppState {
    readonly episodes: EpisodeState
}