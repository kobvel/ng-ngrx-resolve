import { ActionReducerMap } from '@ngrx/store';

import * as fromProfile from './profile/profile.reducer';

// Our top level state interface is just a map of keys to inner state types.
export interface IAppState {
  profileData: fromProfile.IProfileState;
}

const reducers = {
  profileData: fromProfile.reducer,
};

export const storeReducers: ActionReducerMap<IAppState> = reducers;
