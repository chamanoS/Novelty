import { Component, OnInit } from "@angular/core";
import { ClientService } from "src/app/services/client.service";
import { ContentResponse, Content } from "src/app/models/content";
import { DomainResponse } from "src/app/models/domain"; //was not able to use it
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { ToasterService } from "src/app/services/toaster.service";
import { JoyrideService } from 'ngx-joyride';

@Component({
  selector: "app-digital-market",
  templateUrl: "./digital-market.component.html",
  styleUrls: ["./digital-market.component.scss"],
})
export class DigitalMarketComponent implements OnInit {
  contentShow: any;
  form: FormGroup;

  constructor(
    private clientService: ClientService,
    private formBuilder: FormBuilder,
    private toastr: ToasterService,
    private joyride: JoyrideService
  ) {
    this.getContent(4);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      domain: new FormControl("", [Validators.required]),
    });
  }

  /**
   * Gets content from the server's endpoint base on the id.
   * @param id_cat which content id is requested.
   */
  getContent(id_cat): void {
    this.clientService.getContent(4).subscribe((data: ContentResponse) => {
      this.contentShow = data.data;
      console.log(data);
    });
  }

  /**
   * Checks if the domain is available from the server's endpoint.
   */
  postDomain(): void {
    this.clientService.postDomain(this.form.value).subscribe((res) => {
      this.toastr.success(res.data.domain_Availability, res.data.domain, 6000);
      console.log(res);
    });
  }

  /**
   * Executes joyride pop-ups to explain
   * the journey of the entreneur.
   */
  tour() {
    this.joyride.startTour({
      steps: ["infoStep", "btnaddStep", "searchStep", "chosenStep", "postStep", "analyzedStep"],
    });
  }
}
