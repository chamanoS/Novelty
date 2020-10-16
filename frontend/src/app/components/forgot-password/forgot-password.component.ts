import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserResponse } from 'src/app/models/user';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  form: any;
  message = false;
  msg:string 
  

  constructor(private clientService: ClientService, private formBuilder: FormBuilder, private toastr: ToasterService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email:new FormControl('', [Validators.required, Validators.email])
    });
  }

  forgotpassword(){
    this.clientService.forgotPassword(this.form.value).subscribe((data: UserResponse)=> {
      console.log(data)
      this.msg = data.message
      this.message = true;
    },error =>{
      console.log(error);
      this.toastr.error(error.error.message || 'Unable to reset password, please enter a registered email address' ,'novelty',10000)
    });
    
    // console.log(this.form.value)

  }
}
