import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { RestService } from '../shared/rest.service';
import { response } from 'src/models/response';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {


  message = false;
  msg:string 

  form:FormGroup;


 
  
  constructor( private service:RestService,private formBuilder:FormBuilder,private toastr: ToastrService) { 
    
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email:new FormControl('', [Validators.required, Validators.email])
    });
  }

  forgotpass(){
    let json = {email:this.form.value.email}
    this.service.setPassword(json).subscribe((data:response) =>{
      console.log(data.message)
      this.msg = data.message
      this.message=true;
      this.showSuccess()
    },error =>{
      this.toastr.error('invalid email address ','Novelty',{
        timeOut: 5000,
        positionClass: 'toast-top-right',
      })
    });
    
  }


  showSuccess() {
    this.toastr.success('You have successfully ', 'Novelty',{
      timeOut: 5000,
      positionClass: 'toast-top-right',
    });
  }

}
