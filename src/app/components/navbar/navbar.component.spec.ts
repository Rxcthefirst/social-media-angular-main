import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let authServiceStub: Partial<AuthService>;
  let routerStub: Partial<Router>;

  authServiceStub = {

  }

  routerStub = {

  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      providers: [
        {provide: AuthService, useValue: authServiceStub},
        {provide: Router, useValue: routerStub}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
