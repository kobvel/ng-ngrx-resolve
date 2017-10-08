import { IProfileData } from './profile.model';
import { OnInit, OnDestroy, Component } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  public profileData: IProfileData;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.profileData = this.route.snapshot.data.profileData;
  }
}
