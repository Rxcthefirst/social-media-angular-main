import { Component, Input } from '@angular/core';
import { IProfilePersonalInfo } from 'src/app/models/Profile';

@Component({
  selector: 'app-profile-personal-information',
  templateUrl: './profile-personal-information.component.html',
  styleUrls: ['./profile-personal-information.component.css']
})
export class ProfilePersonalInformationComponent {

  @Input()
  profilePersonalInfo: IProfilePersonalInfo = {
    bornCity: '',
    bornCountry: '',

    martialStatus: '',
    jobTitle: '',

    companyName: '',
    companyUrl: '',

    schoolName: ''
  };

  constructor() {}

}
