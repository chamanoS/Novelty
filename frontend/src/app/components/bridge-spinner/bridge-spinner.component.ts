import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router, NavigationEnd } from '@angular/router';
import { LoginResponse, UserResponse } from 'src/app/models/user';
import { filter } from "rxjs/operators";

@Component({
  selector: "app-bridge-spinner",
  templateUrl: "./bridge-spinner.component.html",
  styleUrls: ["./bridge-spinner.component.scss"],
})
export class BridgeSpinnerComponent implements OnInit {
  verified: any;
  user: LoginResponse = {
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    new_user: 1,
  };
  trackLink: ArrayBuffer;
  link: string;
  checkLength: any;
  brideKeys: any;
  dKey: number;
  first: any;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private auth: AuthService
  ) {
  }

  ngOnInit() {
    this.verifyUser();;
  }

  /**
   * Verifies a token.
   */
  verifyUser() {
    if(this.auth.loggedIn) {
      let verified = JSON.parse(sessionStorage.getItem("access_token"));
      this.auth.verifyToken(verified.token).subscribe((res: UserResponse) => {
        this.user = res.data;
        this.routeLastVisited(this.user);
        console.log(this.user);
      });
    }
  }

  /**
   * Tracking the user's route, stores it in the database.
   * New user get's the current route and old user navigates to
   * the one stored on the database.
   * @param id user's details (object).
   */
  routeLastVisited(id) {
    if(id.new_user == 1) {
      this.clientService.getLink(id.id).subscribe((data) => {
        this.checkLength = data;
        console.log(data);
        if(Object.keys(this.checkLength.data).length < 1) {
          let first = { user_id: id.id, step: 0 };
          this.clientService.start(first).subscribe((e) => {
            console.log(e);
            this.router.navigate(["client/odyssey"]);
          });
        } else {
          // this.update(this.checkLength.data[0].id_user);
          this.router.navigate(["client/odyssey"]);
          console.log(this.checkLength.data[0].step);
        }
      });
    } else {
      this.keys(id.id);
      this.router.navigate(["client/land"]);
    }
  }

  /**
   * Update the route as the user navigates the application.
   * Stores the route to the database.
   * @param id user's id
   */
  // update(id) {
  //   this.router.events
  //     .pipe(filter((e) => e instanceof NavigationEnd))
  //     .subscribe((e: NavigationEnd) => {
  //       this.link = e.url;
  //       let data = { user_id: id, link: this.link };
  //       console.log(data);
  //       this.clientService.tracking(data).subscribe((results) => {
  //         console.log(results);
  //       });
  //     });
  // }

  /**
   * Giving access to the user's continue the journey.
   * New user gets the first key and old user navigates gets
   * the one stored on the database.
   * @param id user's id.
   */
  keys(id) {
    this.clientService.getKey(id).subscribe((data) => {
      this.checkLength = data;
      if(Object.keys(this.checkLength.data).length < 1) {
        let first = { id: id, key: 1 };
        this.clientService.firstKey(first).subscribe((e) => {
          console.log(e);
        });
      }
      // else {
      //   console.log(this.checkLength.data.givenKeys, 'bride keys');
      //   this.dKey = this.checkLength.data.givenKeys;
      // }
    });
  }
}
