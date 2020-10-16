import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { FormGroup, FormBuilder } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  form: FormGroup;
  descript: string;
  busin_idea: string;

  constructor(
      private clientService:ClientService,
      private fb: FormBuilder,
      private dialogRef: MatDialogRef<DialogComponent>,
      @Inject(MAT_DIALOG_DATA) data) {

      this.descript = data.descript;
      this.busin_idea = data.busin_idea;
  }

  ngOnInit() {

    this.dialogRef.updateSize('50%', '70%');
      this.form = this.fb.group({
          descript: [this.descript, []],
          busin_idea: [this.busin_idea, []],

      });
  }

  save() {

      this.dialogRef.close(this.form.value);
      //this.clientService.insertBusinessIdea(dat)
  
      
  }

  close() {
    this.dialogRef.close();
}
}
