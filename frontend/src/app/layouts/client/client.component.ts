import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { UserResponse, LoginResponse } from 'src/app/models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.scss"],
})
export class ClientComponent implements OnInit {
  loggedIn: boolean = false;
  user: LoginResponse = {
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    new_user: 1,
  };

  constructor(private clientService: ClientService, private auth: AuthService) {
    this.loggedIn = this.auth.loggedIn;
  }

  ngOnInit() {
    if (this.loggedIn) {
      let verified = JSON.parse(sessionStorage.getItem("access_token"));
      this.auth.verifyToken(verified.token).subscribe((res: UserResponse) => {
        this.user = res.data;
        console.log(this.user);
      });
    }
  }

  logout() {
    this.auth.logout();
  }
}
