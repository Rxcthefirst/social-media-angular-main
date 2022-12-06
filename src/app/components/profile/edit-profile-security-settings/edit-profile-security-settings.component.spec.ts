import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileSecuritySettingsComponent } from './edit-profile-security-settings.component';

describe('EditProfileSecuritySettingsComponent', () => {
  let component: EditProfileSecuritySettingsComponent;
  let fixture: ComponentFixture<EditProfileSecuritySettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfileSecuritySettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProfileSecuritySettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
