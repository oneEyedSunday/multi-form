import { Actions, ActionTypes } from '../actions';


export interface AppState {
  currentForm: number;
  finished: boolean;
}

const initialState: AppState = {
  currentForm: 0,
  finished: false,
};

export function reducer ( state: AppState = initialState, action: Actions): AppState {
  switch (action.type) {
    case ActionTypes.ShowForm:
      return {
        ...state,
        currentForm: action.payload
      };

    default:
      return state;
  }
}






