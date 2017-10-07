import { IProfileData } from './../../..//src/app/profile/profile.model';
import { Store } from '@ngrx/store';
import * as actions from './profile.actions';

export interface IProfileState {
  // define interface for data you expect to get from server
  // or just set type to any
  profileData: IProfileData;
}

export const initialState: IProfileState = {
  profileData: null
};

export function reducer(
  state: IProfileState = initialState,
  action: actions.Actions
): IProfileState {
  switch (action.type) {
    // Create new state object by coping old state
    // and extending with the new data
    case actions.ActionTypes.UPDATE:
      return Object.assign({}, state, {
        profileData: action.payload
      });

    default:
      return state;
  }
}
