import { IProfileData } from './../../../src/app/profile/profile.model';
import { Action } from '@ngrx/store';

export interface IProfileActions {
  UPDATE: string;
}

export const ActionTypes: IProfileActions = {
  UPDATE: 'Profile Data Updated',
};

export class UpdateAction implements Action {
  type = ActionTypes.UPDATE;
  constructor(public payload: IProfileData) { }
}

export type Actions = UpdateAction;
