import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../services/login.service';
import { User } from '../models/tramp';


@Component({
    selector: 'login-user',
    templateUrl: '/login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    user: User;
    private userid: number;
    isAuthenticated:boolean=false;
    constructor(private loginService: LoginService) {
    }

  ngOnInit() {
  }

  async getUser()
  {
    try{
      this.user = await this.loginService.getUser(this.userid);
       localStorage.setItem('currentUser', JSON.stringify(this.user));
       this.isAuthenticated=true;
    }
    catch
    {
      this.isAuthenticated=false;
      console.log("no such User:" + this.userid );
    }
  }

    // constructor(
    //     //private route: ActivatedRoute,
    //     //private router: Router,
    //     //private authenticationService: AuthenticationService,
    //     //private alertService: AlertService
    //   ) { }

    // ngOnInit() {
    //     // reset login status
    //     //this.authenticationService.logout();

    //     // get return url from route parameters or default to '/'
    //     //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    // }

    // login() {
    //     this.loading = true;
    //     this.authenticationService.login(this.model.username, this.model.password)
    //         .subscribe(
    //             data => {
    //                 this.router.navigate([this.returnUrl]);
    //             },
    //             error => {
    //                 this.alertService.error(error);
    //                 this.loading = false;
    //             });
    // }
}
