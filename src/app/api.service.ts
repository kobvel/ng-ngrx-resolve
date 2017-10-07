import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IProfileData } from './profile/profile.model';
import 'rxjs/Rx';



@Injectable()
export class ApiService {
  constructor() { }

  getProfileData(): Observable<IProfileData> {
    return Observable.of({
      firstName: 'John',
      lastName: 'Doe',
      jobTitle: 'Engineer'
    }).delay(3000);
  }

}
