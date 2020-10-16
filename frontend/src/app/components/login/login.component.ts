import { Router } from '@angular/router';
import { ToasterService } from './../../services/toaster.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  userToken: any;
  isLoggedIn = false;
  isLoginFailed = false;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToasterService,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      user_password: ["", Validators.required],
      email: new FormControl("", [Validators.required, Validators.email]),
    });
  }

  /**
   * Pass in the form's value to our login service, to give a user token.
   * Take the user to a specific page.
   * @throws error if something went wrong.
   */
  login(): void {
    this.auth.login(this.form.value).subscribe((data) => {
      this.toastr.success('successfully logged in','novelty',2000);
      this.router.navigate(['client/bridge']); 
    },error =>{
      console.log(error);
      this.toastr.error('Unable to login, please try again later' ,'novelty',10000);
      this.isLoginFailed = true;
    });
  }
}
