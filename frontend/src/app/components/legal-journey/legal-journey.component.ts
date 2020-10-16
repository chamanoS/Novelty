import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { ContentResponse, Content } from 'src/app/models/content';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-legal-journey',
  templateUrl: './legal-journey.component.html',
  styleUrls: ['./legal-journey.component.scss']
})
export class LegalJourneyComponent implements OnInit {


  // tslint:disable-next-line: variable-name
  legalContent_id = 2;
  legalContent: any;
  len = 0;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private clientService: ClientService, private formBuilder: FormBuilder) {
    this.getContent(2);
   }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
  }

  private getContent(id_cat): void {
    this.clientService.getContent(id_cat).subscribe((data: ContentResponse) => {
      this.legalContent = data.data;
      this.len = this.legalContent.length;
      console.log('here are legal content ' + this.legalContent);
    });
  }

}
