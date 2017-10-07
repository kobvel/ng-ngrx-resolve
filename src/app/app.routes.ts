import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProfileResolver } from './profile.resolver';

export const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    resolve: { profileData: ProfileResolver }
  }
];
