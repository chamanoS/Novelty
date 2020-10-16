import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { AuthService } from 'src/app/services/auth.service';
import { QuestionsResponse } from 'src/app/models/questions';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from "rxjs/operators";

@Component({
  selector: "app-journey",
  templateUrl: "./journey.component.html",
  styleUrls: ["./journey.component.scss"],
})
export class JourneyComponent implements OnInit {
  ideas: any;
  changeRate: any;
  user: any;
  found: boolean;
  questions: any;
  verified: any;
  id_cat: 1;
  evaluation: boolean;
  selected: number = 0;
  hovered = 0;
  readonly = true;
  link: string;

  constructor(private clientService: ClientService, private auth: AuthService, private router: Router) {
    this.change();
  }

  ngOnInit() {
    this.verifiedUser();
  }

  /**
   * Gets all the user's ideas that were added by them.
   */
  getUserIdeas() {
    this.clientService.getIdeas(this.user.data.id).subscribe((data) => {
      this.ideas = data;
      this.changeRate = this.ideas.data[0];
      this.selected = Number(this.changeRate.rate);
      if (data.data.length > 0) {
        this.found = true;
      }
    });
  }

  /**
   * Gets questions from the server's endpoint base on the id.
   * @param id_cat which question id is requested.
   */
  getQuestions(id_cat) {
    this.clientService.getQuestions(1).subscribe((data: QuestionsResponse) => {
      this.questions = data.data;
      console.log(data);
    });
  }

  /**
   * Verifies a token.
   */
  verifiedUser() {
    if (this.auth.loggedIn) {
      this.verified = JSON.parse(sessionStorage.getItem("access_token"));
      if (this.verified.auth) {
        // checks if the auth is "true" on the token
        this.auth.verifyToken(this.verified.token).subscribe((data) => {
          this.user = data;
          this.getUserIdeas();
          this.getQuestions(this.id_cat);
          this.update(this.user.id);
        });
      }
    }
  }

  change() {
    this.evaluation = true;
  }

  /**
   * Update the route as the user navigates the application.
   * Stores the route to the database.
   * @param id user's id
   */
  update(id) {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        this.link = e.url;
        let data = { user_id: id, link: this.link };
        console.log(data);
        this.clientService.tracking(data).subscribe((results) => {
          console.log(results);
        });
      });
  }
}
