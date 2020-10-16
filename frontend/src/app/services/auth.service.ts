import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  
  url: string = environment.api;

  constructor(private http: HttpClient) {}

  /**
   * Entering the application, we give the user a token
   * and store the token.
   * @param user
   */
  login(user: any): Observable<any> {
    return this.http.post(this.url + "/users/login", user).pipe(
      map((result: any) => {
        sessionStorage.setItem("access_token", JSON.stringify(result.data));
        console.log("Stored succesfully");
      }),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  /**
   * Verifying a token by get request to the server.
   * @param token
   * @returns a user's details.
   */
  verifyToken(data) {
    const headers = new HttpHeaders({ "x-access-token": data });

    return this.http.get(this.url + "/users/me", { headers: headers });
  }

  /**
   * Exit the application, we remove the token from our storage.
   */
  logout() {
    sessionStorage.removeItem("access_token");
  }

  /**
   * Verification, to check if our user is logged in to the
   * application by:
   * @returns boolean if the token is in our storage.
   */
  public get loggedIn(): boolean {
    return sessionStorage.getItem("access_token") !== null;
  }
}
