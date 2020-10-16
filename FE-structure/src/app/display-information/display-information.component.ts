import { Component, OnInit } from '@angular/core';
import { InformationServiceService } from '../informationService/information-service.service';
import { response } from 'src/models/response';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-display-information',
  templateUrl: './display-information.component.html',
  styleUrls: ['./display-information.component.scss']
})
export class DisplayInformationComponent implements OnInit {
 

  //supposed to be an array;
   //info: any;
   busin_Idea: string = '' ;
   ideas : any ;
   descript: string = '';
   userData: string;
   answer :string = '';
   found = false;
   questions:any;
   user: any ;
 

  constructor(private information_service:InformationServiceService) {
     
    this.userData=localStorage.getItem('id');
    this.user = JSON.parse(this.userData);

    this.getUserIdeas()
    this.displayQuestions();
    
   
    
  }

  ngOnInit() {
   
  }

  viewIdea(id) {
    //console.log(id) ;
  }

  inserIdea()
  {
    var userData1 = JSON.parse(this.userData);
    console.log(userData1);
    this.information_service.insertBusinessIdea({'busin_idea':this.busin_Idea,'descript':this.descript,'id_user':userData1.id})
    .subscribe((data:response) =>{
     // this.ideas = data.data;
     this.getUserIdeas()
      console.log(data);

    });

    
  }

  getUserIdeas()
  {
    console.log('found')
    var userData1 = JSON.parse(this.userData);
    this.information_service.getIdeas(userData1.id)
    .subscribe((data)=>{
      console.log(data);
      this.ideas = data;
      this.found = true;
      console.log(data);
    });

 }

   displayQuestions()
   {
     this.information_service.getQuestions()
    .subscribe((data:response) =>{
      this.questions=data.data;
       console.log(this.ideas);
    })
   }

    // userAnswers() {
    //   var userData1 = JSON.parse(this.userData);
    //   var id_busines = this.viewIdea(this.id);
    //   this.information_service.postAnswers({'user_answer':this.answer,'id_user':userData1.id,'id_bus':id_busines,'id_que':this.questions.id_que})
    //   .subscribe((data:response)=>{

    //     this.ideas = data.data;
    //     console.log(this.ideas);
    //   });
    // }

    popup(id){
      Swal.mixin({
        input: 'text',
        confirmButtonText: 'Next &rarr;',
        showCancelButton: true,
        progressSteps: ['1', '2', '3','4','5']
      }).queue([
        {
          title: 'Question 1',
          text: this.questions[0].q_name
        },
        {
          title: 'Question 2',
          text: this.questions[1].q_name
        },
        {
          title: 'Question 3',
          text: this.questions[2].q_name
        },
        {
          title: 'Question 4',
          text: this.questions[3].q_name
        },
        {
          title: 'Question 5',
          text: this.questions[4].q_name
        }
      ]).then((result) => {

 
        for (let index = 0; index < result.value.length; index++) {
         let sent = {
                        "id_bus": id , 
                        "id_user":  this.user.id ,
                        "user_answer": result.value[index],
                        "id_que": this.questions[index].id
                      }


          this.information_service.postAnswers(sent).subscribe( (res) => {
            console.log(res)
          })
                   
        }
      
        if (result.value) {
          const answers = JSON.stringify(result.value)
          Swal.fire({
            title: 'All done!',
            html: `
              Your answers:
              <pre><code>${answers}</code></pre>
            `,
            confirmButtonText: 'Lovely!'
          })
        }
      })
    }
  
 }
