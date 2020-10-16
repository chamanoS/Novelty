import { Component, OnInit } from '@angular/core';
import { RestService } from '../shared/rest.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { response, user } from 'src/models/response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  constructor(private service:RestService, private formBuilder:FormBuilder,private toastr: ToastrService ,private router: Router) { }


  loginUser(user){

    var userObj : user;
    this.service.login(user).subscribe((data:response) =>{
      this.showSuccess();
      userObj=data.data;
      localStorage.setItem('id', JSON.stringify(userObj));
      this.router.navigate(['/landing'])
       console.log(data);
      
      

     
    },error=>{
      this.toastr.error('Unable to log in','Novelty',
      {
        timeOut: 5000,
        positionClass: 'toast-top-right',
      })
    })
  }

  login(){
    this.loginUser(this.form.value)
    
  }


  ngOnInit() {
    this.form = this.formBuilder.group({
      user_password:['',Validators.required],
      email:new FormControl('', [Validators.required, Validators.email])
    });
   
  }
  
  showSuccess() {
    this.toastr.success('You have successfully logged in', 'Novelty',{
      timeOut: 5000,
      positionClass: 'toast-top-right',
    });

    
  }

}
