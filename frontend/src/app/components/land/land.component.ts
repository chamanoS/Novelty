import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { QuestionsResponse, Questions } from 'src/app/models/questions';
import { AuthService } from '../../services/auth.service';
import { UserResponse, LoginResponse } from 'src/app/models/user';
import { MatDialogConfig } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.css']
})
export class LandComponent implements OnInit {

  questions: Questions[] ;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ]; 
  user: LoginResponse;
  ideas: any ; 
  hovered = 0;
  dialog: any;
  constructor(private clientService: ClientService,private auth: AuthService) {
    
    this.verifyUser() ;
    this.clientService.getQuestions(1).subscribe((res:QuestionsResponse) => {
      this.questions = res.data ;
    })

   }

   verifyUser() {
    if(this.auth.loggedIn) {
      let verified = JSON.parse(sessionStorage.getItem("access_token"));
      this.auth.verifyToken(verified.token).subscribe((res: UserResponse) => {
        this.user = res.data;
      
        this.clientService.getIdeas(this.user.id).subscribe(res => {
          this.ideas = res.data ;
          console.log(this.ideas)
        }) ;
      });
    }
  }

  // getAnswer() {
  //   this.clientService.get
  // }

  selectedIdea(e) {
    console.log(e) ;
  }

  ngOnInit() {
  }



}
