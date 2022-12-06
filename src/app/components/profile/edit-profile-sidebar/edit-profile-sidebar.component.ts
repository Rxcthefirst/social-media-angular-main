import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';

@Component({
  selector: 'app-edit-profile-sidebar',
  templateUrl: './edit-profile-sidebar.component.html',
  styleUrls: ['./edit-profile-sidebar.component.css']
})
export class EditProfileSidebarComponent {

  @Output()
  click = new EventEmitter();

  constructor(
      private authService: AuthService, 
      public router: Router, 
      public dialog: MatDialog,
      public dialogRef: MatDialogRef<EditProfileComponent>
  ) {}

  logout() {
    this.dialogRef.close();
    this.authService.logout();
    this.router.navigate(['login']);
  }


  clickedButton(e : Event, buttonName: string) {
    e.stopPropagation();

    this.click.next(buttonName.toLowerCase());
  }
}
