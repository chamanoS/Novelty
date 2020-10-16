import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { JourneyComponent } from '../journey/journey.component';
import { Router } from '@angular/router';
import { QuestionComponent } from '../question/question.component';
import { Location } from '@angular/common';

@Component({
  selector: "app-ratings",
  templateUrl: "./ratings.component.html",
  styleUrls: ["./ratings.component.scss"],
})
export class RatingsComponent implements OnInit {
  selected: any;
  hovered = 0;
  readonly = false;
  id_business: any;
  descript: any;
  user_id: any;
  hide: boolean;

  constructor(private clientService: ClientService, private journey: JourneyComponent, private router: Router, private question: QuestionComponent, private location: Location
  ) { }
  ngOnInit() { }

  /**
   * Updates the rating of a business idea.
   * @param rate
   */
  updateRate() {
    console.log(this.selected);
    let data = {
      rate: this.selected,
      busin_id: this.journey.ideas.data[0].id,
      id_user: this.journey.user.data.id,
    };
    this.clientService.updateRatings(data).subscribe((results) => {
      this.hide = true;
    });
  }

  retakeQuestions() {
    this.question.done = false;
    this.question.show = false;
    this.hide = false;

    this.router.navigateByUrl("client/question", { skipLocationChange: true }).then(() => {
      this.router.navigate([decodeURI(this.location.path())]);
    });
  }
}
