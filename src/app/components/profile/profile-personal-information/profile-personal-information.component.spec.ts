import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePersonalInformationComponent } from './profile-personal-information.component';

describe('ProfilePersonalInformationComponent', () => {
  let component: ProfilePersonalInformationComponent;
  let fixture: ComponentFixture<ProfilePersonalInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePersonalInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilePersonalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
