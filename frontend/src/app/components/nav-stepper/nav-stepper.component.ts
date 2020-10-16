import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatStepper } from '@angular/material';
import { ClientService } from 'src/app/services/client.service';
import { LoginResponse, UserResponse } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { StepperSelectionEvent } from '@angular/cdk/stepper';

@Component({
  selector: "app-nav-stepper",
  templateUrl: "./nav-stepper.component.html",
  styleUrls: ["./nav-stepper.component.scss"],
})
export class NavStepperComponent implements OnInit, AfterViewInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  user: LoginResponse = {
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    new_user: 1,
  };
  check: any;
  step: number;

  constructor(private _formBuilder: FormBuilder, private clientService: ClientService, private auth: AuthService) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ["", Validators.required],
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ["", Validators.required],
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ["", Validators.required],
    });
    // this.selectionChange(this.step);
  }

  @ViewChild("stepper", { static: false }) stepper: MatStepper;
  ngAfterViewInit() {
    if(this.auth.loggedIn) {
      let verified = JSON.parse(sessionStorage.getItem("access_token"));
      this.auth.verifyToken(verified.token).subscribe((res: UserResponse) => {
        this.user = res.data;
        this.clientService.getLink(this.user.id).subscribe((data) => {
          this.check = data;
          this.step = this.check.data[0].step;
          // To avoid "ExpressionChangedAfterItHasBeenCheckedError" error,
          // set the index in setTimeout
          setTimeout(() => {
            this.stepper.selectedIndex = this.step;
          }, 10);
        });
      });
    }
  }

  selectionChange($event?: StepperSelectionEvent) {
    let updateStep = { user_id: this.user.id, step: $event.selectedIndex };
    if($event.selectedIndex > this.step) {
      this.clientService.tracking(updateStep).subscribe((data) => {
        console.log(data)
      }); 
    }
    if($event.selectedIndex == 5) {
      this.clientService.notNewUers({user_id: this.user.id}).subscribe((data) => {
        console.log(data);
      });
    }
    
  }
}
