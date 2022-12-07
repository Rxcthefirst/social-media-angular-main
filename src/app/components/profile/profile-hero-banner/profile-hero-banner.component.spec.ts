import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { IProfileHeroBanner } from 'src/app/models/Profile';

import { ProfileHeroBannerComponent } from './profile-hero-banner.component';

describe('ProfileHeroBannerComponent', () => {
  let component: ProfileHeroBannerComponent;
  let fixture: ComponentFixture<ProfileHeroBannerComponent>;
  let dialogStub: Partial<MatDialog>;
  let expectedHBI: IProfileHeroBanner =  {
    avatarImageUrl: "",
    backgroundImageUrl: "",
    firstName: "",
    lastName: "",
    currentCity: "",
    currentCountry: ""
  };

  dialogStub = {

  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileHeroBannerComponent ],
      providers: [{provide: MatDialog, useValue: dialogStub}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileHeroBannerComponent);
    component = fixture.componentInstance;
    component.heroBannerInformation = expectedHBI;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
