import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { IAppState } from './app.state';
import * as profileActions from './profile/profile.actions'
import { IProfileData } from './profile/profile.model';
import { ApiService } from './api.service';

@Injectable()
export class ProfileResolver implements Resolve<IProfileData> {
  constructor(private apiService: ApiService, private store: Store<IAppState>) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IProfileData> {

    this.apiService.getProfileData().toPromise()
      .then(data => {
        this.store.dispatch(new profileActions.UpdateAction(data));
      });

    return this.store.select('profileData')
      .map(store => store.profileData)
      .take(1);
  }
}
