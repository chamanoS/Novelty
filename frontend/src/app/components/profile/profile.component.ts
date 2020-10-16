import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { ClientService } from "src/app/services/client.service";
import { ToasterService } from "src/app/services/toaster.service";
import { DeveloperProfile } from "src/app/models/developers";
import { Router } from "@angular/router";
import { MatProgressSpinnerModule } from '@angular/material'

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  devProfile: DeveloperProfile[] = [];

  domainStatus: object;
  form: FormGroup;

  constructor(
    private clientService: ClientService,
    private formBuilder: FormBuilder,
    private toastr: ToasterService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      domain: new FormControl('', [Validators.required])
    });

    this.devProfile.push(
      {
        name: "Gift Banda",
        title: "Software Developer",
        company: "Digital Academy",
        yearsOfExperience: 1,
        workStart: "Jan 2019",
        workEnd: "May 2020",
        description: "developing restful apis",
        frontendSkills: "html, css, angular",
        backendSkills: "php, java, nodejs",
        databaseSkills: "mysql,workbench",
        devopSkills: "",
        school: "University Of Pretoria",
        degree: "Information Technology",
        fieldofstudy: "ICT",
        educationStart: "Jan 2017",
        educationEnd: "December 2019",
        devImg: "assets/img/gift1.jpeg",
        twitter: "link",
        facebook: "link",
      },
      {
        name: "Samukelisiwe Mcholo",
        title: "Frontend developer",
        company: "Asolutions",
        yearsOfExperience: 2,
        workStart: "January 2017",
        workEnd: "May 2019",
        description: "designing responsive webistes and applications",
        frontendSkills: "html, css, React",
        backendSkills: "python ,Ruby",
        databaseSkills: "mysql ",
        devopSkills: "",
        school: "University Of South Africa",
        degree: "Information Technology",
        fieldofstudy: "ICT",
        educationStart: "January 2015",
        educationEnd: "December 2017",
        devImg: "assets/img/img3.jpg",
        twitter: "link",
        facebook: "link",
      },
      {
        name: "Chamano Ramashia",
        title: "Full-stack developer",
        company: "ABSA",
        yearsOfExperience: 2,
        workStart: "March 2015",
        workEnd: "May 2017",
        description:
          "Specialising with developing online shopping(e-commerce) webpages",
        frontendSkills: "html, css, Vue",
        backendSkills: "Groovy,Golang,PhP",
        databaseSkills: "NoSql",
        devopSkills: "",
        school: "WITS",
        degree: "Information Technology",
        fieldofstudy: "ICT",
        educationStart: "January 2011",
        educationEnd: "December 2015",
        devImg: "assets/img/portfolio.JPG",
        twitter: "link",
        facebook: "link",
      },
      {
        name: "Philani Mahele",
        title: "Backend developer",
        company: "Digital Academy",
        yearsOfExperience: 3,
        workStart: "August 2015",
        workEnd: "May 2017",
        description: "developing restful apis",
        frontendSkills: "html, css,Javascript,React",
        backendSkills: "Scala,PHP,Nodejs",
        databaseSkills: "mysql workbench",
        devopSkills: "",
        school: "Tshwane University Of Technology",
        degree: "Information Technology",
        fieldofstudy: "ICT",
        educationStart: "January 2011",
        educationEnd: "December 2015",
        devImg: "assets/img/Philani.jpeg",
        twitter: "link",
        facebook: "link",
      },

      {
        name: "Nomaseko Mhlanga",
        title: "Software Developer",
        company: "Digital Academy",
        yearsOfExperience: 1,
        workStart: "Jan 2019",
        workEnd: "May 2020",
        description: "developing restful apis",
        frontendSkills: "html, css, angular",
        backendSkills: "php, java, nodejs",
        databaseSkills: "mysql,workbench",
        devopSkills: "",
        school: "University Of Pretoria",
        degree: "Information Technology",
        fieldofstudy: "ICT",
        educationStart: "Jan 2017",
        educationEnd: "December 2019",
        devImg: "assets/img/noma.jpg",
        twitter: "link",
        facebook: "link",
      },
      {
        name: "Jane Boikhutso",
        title: "Frontend developer",
        company: "Asolutions",
        yearsOfExperience: 2,
        workStart: "January 2017",
        workEnd: "May 2019",
        description: "designing responsive webistes and applications",
        frontendSkills: "html, css, React",
        backendSkills: "python ,Ruby",
        databaseSkills: "mysql ",
        devopSkills: "",
        school: "University Of South Africa",
        degree: "Information Technology",
        fieldofstudy: "ICT",
        educationStart: "January 2015",
        educationEnd: "December 2017",
        devImg: "assets/img/img.jpg",
        twitter: "link",
        facebook: "link",
      },
      {
        name: "Lesego Ntolo",
        title: "Full-stack developer",
        company: "ABSA",
        yearsOfExperience: 2,
        workStart: "March 2015",
        workEnd: "May 2017",
        description:
          "Specialising with developing online shopping(e-commerce) webpages",
        frontendSkills: "html, css, Vue",
        backendSkills: "Groovy,Golang,PhP",
        databaseSkills: "NoSql",
        devopSkills: "",
        school: "WITS",
        degree: "Information Technology",
        fieldofstudy: "ICT",
        educationStart: "January 2011",
        educationEnd: "December 2015",
        devImg: "assets/img/img1.jpg",
        twitter: "link",
        facebook: "link",
      },
      {
        name: "Ingrid Smith",
        title: "Backend developer",
        company: "Digital Academy",
        yearsOfExperience: 3,
        workStart: "August 2015",
        workEnd: "May 2017",
        description: "developing restful apis",
        frontendSkills: "html, css,Javascript,React",
        backendSkills: "Scala,PHP,Nodejs",
        databaseSkills: "mysql workbench",
        devopSkills: "",
        school: "Tshwane University Of Technology",
        degree: "Information Technology",
        fieldofstudy: "ICT",
        educationStart: "January 2011",
        educationEnd: "December 2015",
        devImg: "assets/img/img2.jpg",
        twitter: "link",
        facebook: "link",
      }
    );

    console.log(this.devProfile[0].name);
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

  cardClick(dev): void {
    this.router.navigateByUrl("/developers", { state: dev });
  }
}
