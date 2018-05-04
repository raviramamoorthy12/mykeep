import { Component, OnInit } from '@angular/core';
import {Auth} from '../auth';
import {AuthService} from '../service/auth.service';
import {RouterService} from "../service/router.service";
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 auth: Auth = new Auth();
  error = false;
  errorMsg: string;

  constructor(private authService: AuthService, private routerService: RouterService) {
  }

  ngOnInit() {

  }


  onSubmit() {
    this.authService.getToken(this.auth).subscribe(
      data => {console.log(data.token);
        this.authService.saveToken(data.token).subscribe(
          data => {
            this.error = false;
            if ( data === true) {
              this.routerService.navigateToDashboard();
            }
          },
          error2 => {
            console.error(error2);
          }
        );
      },
      error => {
        this.error = true;
      const responseError: HttpErrorResponse = error;
      this.errorMsg = 'User Name or Password Invalid';
        console.log('Message -->' + responseError.message);
        console.log('Error -->' + responseError.error.message);
        console.log('Name -->' + responseError.name);
        console.log('StatusText -->' + responseError.statusText);
        console.log('Status -->' + responseError.status);
        console.log('Status -->' + responseError.ok);
        console.log('Ok Status -->' + responseError.url);



      }
    );

  }
}
