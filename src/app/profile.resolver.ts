import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { IAppState } from './app.state';
import * as profileActions from './profile/profile.actions'
import { IProfileData } from './profile/profile.model';
import { ApiService } from './api.service';

@Injectable()
export class ProfileResolver implements Resolve<IProfileData> {
  constructor(private apiService: ApiService, private store: Store<IAppState>) { }

  resolve(): Observable<IProfileData> {

    this.initProfileData();

    return this.waitForProfileDataToLoad();
  }

  waitForProfileDataToLoad(): Observable<IProfileData> {
    return this.store.select('profile')
      .map(store => store.profileData)
      .filter(profileData => !!profileData)
      .take(1);
  }

  initProfileData(): void {
    this.store.take(1).subscribe(store => {
      if (!store.profile.profileData) {
        this.apiService.getProfileData().toPromise().then(data => {
          this.store.dispatch(new profileActions.UpdateAction(data));
        });
      }
    });
  }
}
