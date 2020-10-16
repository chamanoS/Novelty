import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { QuestionsResponse , Questions } from 'src/app/models/questions';
import { ContentResponse, Content } from 'src/app/models/content';
import { JoyrideService } from "ngx-joyride";
import { Router } from '@angular/router';

@Component({
  selector: "app-legal",
  templateUrl: "./legal.component.html",
  styleUrls: ["./legal.component.scss"],
})
export class LegalComponent implements OnInit {
  questions: Questions[];
  content: Content[];
  contentShow: Content;
  show: boolean = false;
  index: number = 0;
  button: string = "Yes";
  pageLoaded: boolean = false;
  done: boolean = false;

  constructor(private clientService: ClientService, private joyride: JoyrideService,private router: Router) {
    this.Getquestions(2);
    this.getContent(2);
  }

  ngOnInit() {}

   /**
   * Gets questions from the server's endpoint base on the id.
   * @param id_cat which question id is requested.
   */
  // getQuestions(id_cat): void {
  //   this.clientService.getQuestions(id_cat).subscribe((data: QuestionsResponse) => {
  //     this.questions = data.data;
  //     console.log(this.questions.length);
  //     console.log(data);
  //   });
  // }

  Getquestions(id_cat): void{ this.clientService.getQuestions(2).subscribe((data:QuestionsResponse) =>{ this.questions = data.data 
    console.log(this.questions.length) 
    console.log(data) }) }
   /**
   * Gets content from the server's endpoint base on the id.
   * @param id_cat which content id is requested.
   */
  getContent(id_cat): void {
    this.clientService.getContent(id_cat).subscribe((data: ContentResponse) => {
      this.content = data.data;
      this.contentShow = this.content[this.index];
      this.pageLoaded = true;
    });
  }

  noClick(): void {
    this.contentShow = this.content[this.index];
    this.show = true;
    this.button = "Next";
    console.log(this.contentShow);
    // #f3f3f3
  }

  yesClick(): void {
    if (this.index++ <= this.questions.length - 1) {
      this.show = false;
      this.button = "Yes";
    } else {
      this.button = "Head to finance";
    
      this.done = true;
 
    }
  }

  /**
   * Executes joyride pop-ups to explain
   * the journey of the entreneur.
   */
  tour() {
    this.joyride.startTour({
      steps: ["legalStep"],
    });
  }
  
}