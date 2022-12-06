import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileHeroBannerComponent } from './profile-hero-banner.component';

describe('ProfileHeroBannerComponent', () => {
  let component: ProfileHeroBannerComponent;
  let fixture: ComponentFixture<ProfileHeroBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileHeroBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileHeroBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
