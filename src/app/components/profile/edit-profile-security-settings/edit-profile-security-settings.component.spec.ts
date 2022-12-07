import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileService } from 'src/app/services/profile.service';

import { EditProfileSecuritySettingsComponent } from './edit-profile-security-settings.component';

describe('EditProfileSecuritySettingsComponent', () => {
  let component: EditProfileSecuritySettingsComponent;
  let fixture: ComponentFixture<EditProfileSecuritySettingsComponent>;
  let profileServiceStub: Partial<ProfileService>;

  profileServiceStub = {

  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfileSecuritySettingsComponent ],
      providers: [{provide: ProfileService, useValue: profileServiceStub}]
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
