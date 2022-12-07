import { ComponentFixture, TestBed } from '@angular/core/testing';
import { defer, Observable } from 'rxjs';
import { IChangePassword } from 'src/app/models/Profile';
import { ProfileService } from 'src/app/services/profile.service';

import { EditProfileSecuritySettingsComponent } from './edit-profile-security-settings.component';

describe('EditProfileSecuritySettingsComponent', () => {
  let component: EditProfileSecuritySettingsComponent;
  let fixture: ComponentFixture<EditProfileSecuritySettingsComponent>;
  let profileServiceStub: Partial<ProfileService>;

  profileServiceStub = {
    changePassword(changePassword: IChangePassword): Observable<any> {
      let result = {
        message: "result"
      }
      return defer(()=>Promise.resolve(result));
    }
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

  it('should set message if passwords do not match', () => {
    component.form.value.newPassword = "newPass";
    component.form.value.reenteredPassword = "rePass";
    component.submit();
    expect(component.message).toContain('password');
  });

  it('should not set error message if passwords match', () => {
    component.form.value.newPassword = "newPass";
    component.form.value.reenteredPassword = "newPass";
    component.submit();
    expect(component.message).toEqual('');
  });
});
