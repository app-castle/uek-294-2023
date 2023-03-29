import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { of } from 'rxjs';

import { LoginComponent } from './login.component';
import { LoginResponse } from './user';
import { UserService } from './user.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    sessionStorage.removeItem('auth-token');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('will break if the form is invalid', () => {
    // arrange
    const form = {
      invalid: true,
    } as NgForm;

    const service = TestBed.inject(UserService);
    spyOn(service, 'login');

    // act
    component.onLogin(form);

    // assert
    expect(service.login).not.toHaveBeenCalled();
  });

  it('will execute login if form is valid', () => {
    // arrange
    const form = {
      invalid: false,
      value: {
        email: 'example@test.com',
        password: 'blablapassword',
      },
    } as NgForm;

    const service = TestBed.inject(UserService);
    spyOn(service, 'login').and.callThrough();

    // act
    component.onLogin(form);

    // assert
    expect(service.login).toHaveBeenCalled();
  });

  it('has an auth token in the session storage after login', () => {
    // arrange
    const form = {
      invalid: false,
      value: {
        email: 'example@test.com',
        password: 'blablapassword',
      },
    } as NgForm;

    const service = TestBed.inject(UserService);
    spyOn(service, 'login').and.returnValue(
      of({
        accessToken: 'awesome-token-bla-bla',
        user: {
          email: 'example@test.com',
          id: 1,
        },
      } as LoginResponse)
    );

    // act
    component.onLogin(form);

    // assert
    const token = sessionStorage.getItem('auth-token');
    expect(token).toBe('awesome-token-bla-bla');
  });
});
