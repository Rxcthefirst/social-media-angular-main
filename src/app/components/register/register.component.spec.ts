import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, defer } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let authServiceStub: Partial<AuthService>;
  let routerStub: Partial<Router>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  authServiceSpy = jasmine.createSpyObj('AuthService', ['register']);

  authServiceStub = {
    register(firstName, lastName, email, password): Observable<any> {
        return defer(()=>Promise.resolve({}))
    }
  }

  routerStub = {
    navigate(arg: String[]):Promise<boolean>{
      return Promise.resolve(true);
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      providers: [
        {provide: AuthService, useValue: authServiceSpy},
        {provide: Router, useValue: routerStub}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call register if no errors', () => {
    authServiceSpy.register.and.returnValue(defer(()=>Promise.resolve()))
    component.registerForm  = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    })
    let mock = {preventDefault(){}}
    component.onSubmit(mock);
    expect(authServiceSpy.register).toHaveBeenCalled()
  });
});
