import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"]
})
export class LandingComponent implements OnInit {
  token: any;
  verify: any;
  user: any;
  
  constructor(private auth: AuthService) {
    // this.user = JSON.parse(sessionStorage.getItem("user"));
    // console.log(this.user);
  }

  ngOnInit() {}
}
