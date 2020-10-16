import { Component, OnInit } from "@angular/core";
import { ClientService } from "../../services/client.service";
import { ContentResponse, Content } from "src/app/models/content";


@Component({
  selector: "app-finance",
  templateUrl: "./finance.component.html",
  styleUrls: ["./finance.component.scss"],
})

export class FinanceComponent implements OnInit {
 
  document: any;
  financeContent: any;

  constructor(private clientService: ClientService) {
    this.getDocuments(5);
    this.getContent(3);
  }

  ngOnInit() {}


  /**
   * Gets content from the server's endpoint base on the id.
   * @param id_cat which content id is requested.
   */
  getContent(id_cat): void {
    this.clientService.getContent(id_cat).subscribe((data: ContentResponse) => {
      this.financeContent = data.data;
    });
  }


    /**
   * Gets content from the server's endpoint base on the id.
   * @param id_cat which content id is requested.
   */
  getDocuments(id_cat): void {
    this.clientService.getContent(id_cat).subscribe((data: ContentResponse) => {
      this.document = data.data;
    });
  }
}