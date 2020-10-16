import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public ngOnInit(): void {
   
  }

  title = 'Novelty';
  // public environment = environment.environment;
  // public SomeAPIKey = environment.APIKeys.SomeAPIKey;
  // public SomeOtherAPIKey = environment.APIKeys.SomeOtherAPIKey; 
   constructor(){
    console.log(environment.production);
  }


}

