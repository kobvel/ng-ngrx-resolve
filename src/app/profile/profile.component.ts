import { OnInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProfileData } from './profile.model';

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
