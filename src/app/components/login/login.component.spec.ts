import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Observable, defer } from 'rxjs';
import User from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authServiceStub: Partial<AuthService>;
  let routerStub: Partial<Router>;
  let routerSpy: jasmine.SpyObj<Router>;
  routerSpy = jasmine.createSpyObj('Router',['navigate']);

  authServiceStub = {
    login(email: string, password: string): Observable<any> {
      let user = new User(0,"","","");
      return defer(()=>Promise.resolve(user));
    } 
  }

  routerStub = {
    navigate(args: String[]): Promise<boolean> {
      return Promise.resolve(true);
    }
  }


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [
        {provide: AuthService, useValue: authServiceStub},
        {provide: Router, useValue: routerSpy}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to post-feed on login', () => {
    routerSpy.navigate.and.returnValue(Promise.resolve(true))
    let mock = {preventDefault(){}};
    component.onSubmit(mock);
    setTimeout(()=>{
      expect(routerSpy.navigate).toHaveBeenCalled();
    },100);
  });

  it('should navigate to register on calling register', () => {
    routerSpy.navigate.and.returnValue(Promise.resolve(true))
    component.register();
    expect(routerSpy.navigate).toHaveBeenCalled();
  });
});
