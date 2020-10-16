import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Questions, QuestionsResponse } from 'src/app/models/questions';
import { ClientService } from '../../services/client.service';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  questions: Questions[];
  question: Questions = { id: 0, q_name: 'loading' };
  show = false;
  index = 0;
  button = 'Next';
  pageLoaded = false;
  done = false;
  formQuestion: FormGroup;
  frmControlNames: string[] = [];
  busID: any;
  userID: any;
  local: any;
  bizName = "";

  constructor(private clientService: ClientService, private fb: FormBuilder, private router: Router) {
    this.Getquestions();
    this.local = JSON.parse(localStorage.getItem("Value"));
    this.bizName = this.local.busin_idea
  }

  ngOnInit() {
    this.formQuestion = this.fb.group({
      answer: ['', []],
    });

  }

  Getquestions(): void {
    this.clientService.getQuestions(1).subscribe((data: QuestionsResponse) => {
      this.questions = data.data;
      this.question = this.questions[this.index];
    });
  }

  save(): void {
    this.answerQuestion();
    this.yesClick();
  }

  answerQuestion(): void {
    this.local = JSON.parse(localStorage.getItem('Value'));
    const idBus = this.local.id;
    const idUser = this.local.id_user;
    const answer = this.formQuestion.value;

    const data = {
      user_answer: answer.answer,
      id_user: idUser,
      id_que: this.question.id,
      id_bus: idBus
    };

    console.log('user_answer: ' + data.user_answer, 'id_user: ' + data.id_user, 'id_que: ' + data.id_que, 'id_bus: ' + data.id_bus);
    this.clientService.postAnswers(data).subscribe((result) => {
      this.index++;
      this.question = this.questions[this.index];
      this.formQuestion.reset(); // clear the input box after an answer has been submitted
    });
  }


  continueToLegal(): void{
    this.router.navigate(['client/legalJourney']);
  }


  yesClick(): void {
    if (this.index < this.questions.length - 1) {
      this.show = false;
      this.button = 'Next';
    } else {
      this.done = true;
      this.show = true;
      // this.router.navigate(["client/journey"]);
    }
  }

}
