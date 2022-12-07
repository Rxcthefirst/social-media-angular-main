import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

import { EditProfileSidebarComponent } from './edit-profile-sidebar.component';

describe('EditProfileSidebarComponent', () => {
  let component: EditProfileSidebarComponent;
  let fixture: ComponentFixture<EditProfileSidebarComponent>;
  let authServiceStub: Partial<AuthService>;
  let routerStub: Partial<Router>;
  let dialogStub: Partial<MatDialog>;
  let dialogRefStub: Partial<MatDialogRef<EditProfileSidebarComponent>>;

  authServiceStub = {

  }

  routerStub = {

  }

  dialogStub = {

  }

  dialogRefStub = {

  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfileSidebarComponent ],
      providers: [
        {provide: AuthService, useValue: authServiceStub},
        {provide: Router, useValue: routerStub},
        {provide: MatDialog, useValue: dialogStub},
        {provide: MatDialogRef, useValue: dialogRefStub},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProfileSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
