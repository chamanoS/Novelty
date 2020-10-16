import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PasswordValidation } from './password-validator';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserResponse } from 'src/app/models/user';
import { ToasterService } from 'src/app/services/toaster.service';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form:FormGroup;

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor(private clientService: ClientService,private formBuilder:FormBuilder,private toastr: ToasterService,private router: Router ) {

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      user_password:['',Validators.required],
      confirm_password:['',Validators.required],
      first_name:['',Validators.required],
      last_name:['',Validators.required],
      email:new FormControl('', [Validators.required, Validators.email])
    },{
     validator:PasswordValidation.MatchPassword
    });
  }

  register(user): void
  {
    this.clientService.register(user).
    subscribe((data:UserResponse)=> {
      //console.log(data);
      this.toastr.success(data.message,'',2000)
      this.router.navigate(['/client/login'])

    },error =>{
      this.toastr.error(error.error.message || 'Unable to register, please try again later','',5000)

    });
  }

  submit(): void
  {
    let userData: any = this.form.value;
    delete userData.confirm_password;
     this.register(userData);
    //console.log(this.form.value)

  }



}
