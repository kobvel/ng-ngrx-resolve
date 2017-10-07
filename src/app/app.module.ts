import { ApiService } from './../../src/app/api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { ProfileComponent } from './profile/profile.component';
import { AppComponent } from './app.component';
import { ProfileResolver } from './profile.resolver';
import { routes } from 'app/app.routes';
import { storeReducers } from './app.state';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(storeReducers),
  ],
  providers: [ApiService, ProfileResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
