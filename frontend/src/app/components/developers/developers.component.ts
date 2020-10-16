import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { ClientService } from "src/app/services/client.service";
import { ToasterService } from "src/app/services/toaster.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-developers",
  templateUrl: "./developers.component.html",
  styleUrls: ["./developers.component.scss"],
})
export class DevelopersComponent implements OnInit {
  form: FormGroup;
  domainStatus: object;
  profile: any;

  // constructor(private clientService: ClientService, private formBuilder: FormBuilder, private toastr: ToasterService) { }

  constructor(
    private clientService: ClientService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToasterService
  ) {
    console.log(this.router.getCurrentNavigation().extras.state);
    this.profile = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      domain: new FormControl('', [Validators.required])
    });
  }

  postDomain(): void {
    this.clientService.postDomain(this.form.value).subscribe(
      (res) => {
        if (res.data.isAvailable) {
          this.toastr.success(res.data.domain_Availability, res.data.domain, 6000);
        } else {
          this.toastr.warning(res.data.domain_Availability, res.data.domain, 6000);
        }
        console.log(res);
      }, (error) => {
        this.toastr.error('Unable to check for domain, an error has ocured', 'novelty', 10000);
        console.log(error);
      });

    }



}
