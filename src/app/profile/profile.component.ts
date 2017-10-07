import { OnInit, OnDestroy, Component } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit, OnDestroy {

  public profileData$: Subscription;
  public data;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot);
  }

  ngOnDestroy() {
  }
}
