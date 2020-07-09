import { CharacterState } from '../reducers/character.reducer';
import { EpisodeState } from '../reducers/episodes.reducer';


export interface AppState {
    readonly characters: CharacterState,
    readonly episodes: EpisodeState
}