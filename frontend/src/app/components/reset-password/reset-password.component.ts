import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidation } from '../register/password-validator';
import { ClientService } from 'src/app/services/client.service';
import { UserResponse } from 'src/app/models/user';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  
  form: FormGroup;
  token: string;

  constructor(private formBuilder: FormBuilder, private clientService: ClientService,private router : Router, private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      this.token = params.token;
    })
   }

  ngOnInit() {
    this.form = this.formBuilder.group({
      user_password:['',Validators.required],
      confirm_password:['',Validators.required]
    },{
     validator:PasswordValidation.MatchPassword
    });
  }

  resetPassword(user: any): void 
  { let userData = {token: this.token, user_password: this.form.value.user_password}
  
    this.clientService.resetPassword(userData).subscribe((data: UserResponse) => {
      console.log(data)
      this.router.navigate(['/client/login']);
    });
  }

}
