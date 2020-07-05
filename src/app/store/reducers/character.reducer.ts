import { Character } from '../models/character';
import {
  CharacterActionTypes,
  CharacterActions,
} from '../actions/character.action';

export interface CharacterState {
  content: Character[];
  loading: boolean;
  error: Error;
}

const initialState: CharacterState = {
  content: [],
  loading: false,
  error: undefined,
};

export function CharacterReducer(
  state: CharacterState = initialState,
  action: CharacterActions
) {
  switch (action.type) {
    case CharacterActionTypes.LOAD_CHARACTERS:
      return {
        ...state,
        loading: true,
      };
    case CharacterActionTypes.LOAD_CHARACTERS_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CharacterActionTypes.LOAD_CHARACTERS_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
