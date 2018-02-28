import { Action } from '@ngrx/store';

export enum ActionTypes {
  ShowForm = 'Show Form'
}

// export class StartForm implements Action {
//   readonly type = ActionTypes.StartForm;
// }

export class ShowForm implements Action {
  readonly type = ActionTypes.ShowForm;
  constructor(public payload: number) {}
}

export type Actions = ShowForm;

