import { CharacterState } from '../reducers/character.reducer';


export interface AppState {
    readonly characters: CharacterState
}