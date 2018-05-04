import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { Auth } from '../auth';
import { Observable } from 'rxjs/Observable';
import  'rxjs';


import { AssertNotNull } from '@angular/compiler';


describe('AuthService isolated test', () => {
 let authService: AuthService,
   mockHttp;

 beforeEach(() => {
   mockHttp = jasmine.createSpyObj('mockHttp', ['get', 'post'] );
   authService =  new AuthService(mockHttp);
 })

  it('should get token', () => {
    const auth: Auth = new Auth ();
    auth.username = 'admin';
    auth.password = 'password';
    authService.getToken(auth).subscribe (
    data => data.token,
        error => console.log(error)
    );

 });

});
