import { OnInit, OnDestroy, Component } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit, OnDestroy {

  public profileData$: Subscription;
  public data;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.profileData$ = this.apiService.getProfileData()
      .subscribe(data => this.data = data);
  }

  ngOnDestroy() {
    this.profileData$.unsubscribe();
  }
}
