import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { UserResponse } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { Router, NavigationEnd } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { filter } from "rxjs/operators";


@Component({
  selector: "app-display",
  templateUrl: "./display.component.html",
  styleUrls: ["./display.component.scss"],
})
export class DisplayComponent implements OnInit {
  user: any;
  verified: any;
  token: any;
  userName = "";
  form: FormGroup;
  link: unknown;
  saved = false ;

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    private auth: AuthService,
    private router: Router
  ) {
    this.verifiedUser();
     

  }

  ngOnInit() {
    this.form = this.fb.group({
      descript: ["", []],
      busin_idea: ["", []],
    });
  }

  /**
   * Adds a user's idea.
   * @param idea inserted by the user.
   */
  inserIdea(idea) {
    this.clientService.insertBusinessIdea(idea).subscribe((data: UserResponse) => {
      localStorage.setItem('Value',JSON.stringify(data.data));
      // this.router.navigate(['client/journey']);
 
      });
  }

  /**
   * Verifies a token.
   */
  verifiedUser() {
    if (this.auth.loggedIn) {
      this.verified = JSON.parse(sessionStorage.getItem("access_token"));
      if (this.verified.auth) {
        this.auth.verifyToken(this.verified.token).subscribe((data) => {
          this.user = data;
          this.userName = this.user.data.first_name;
        });
      }
    }
  }

  continue(): void {
    let idea = this.form.value;

    idea.id_user = this.user.data.id;

    this.inserIdea(idea);
    this.saved = true ;
  }


}