import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IProfileHeroBanner } from 'src/app/models/Profile';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';

@Component({
  selector: 'app-profile-hero-banner',
  templateUrl: './profile-hero-banner.component.html',
  styleUrls: ['./profile-hero-banner.component.css']
})
export class ProfileHeroBannerComponent {

  @Input()
  isEditable: boolean = false;

  @Input()
  heroBannerInformation: IProfileHeroBanner;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(EditProfileComponent);
  }
  
}
