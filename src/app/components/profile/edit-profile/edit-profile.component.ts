import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {

  showComponent = new BehaviorSubject<string>('general information');

  constructor(public router: Router){}

  onClick(buttonName : string) {
    this.showComponent.next(buttonName);
  }

}
