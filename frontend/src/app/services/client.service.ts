import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: "root",
})
export class ClientService {
  url: string = environment.api;
  constructor(private http: HttpClient) {}

  public register(user: any): Observable<any> {
    return this.http.post(this.url + "/users", user);
  }

  public login(user: any): Observable<any> {
    return this.http.post(this.url + "/users/login", user);
  }

  public forgotPassword(user: any): Observable<any> {
    return this.http.post(this.url + "/users/forgotPassword", user);
  }

  public resetPassword(user: any): Observable<any> {
    return this.http.post(this.url + "/users/resetPassword", user);
  }

  //enter business idea
  public insertBusinessIdea(data) {
    return this.http.post(this.url + "/ideas", data);
  }

  /**
   * Gets business ideas on a specific user.
   * @param user_id
   * @returns
   * all ideas with a http request made to the server.
   */
  public getIdeas(user_id): Observable<any> {
    return this.http.get(this.url + "/ideas/" + user_id);
  }

  public myIdeas(id) {
    return this.http.get(this.url + "/ideas/" + id);
  }

  /**
   * Gets questions.
   * @param data an object that has what's required.
   * @returns
   * all questions with a http request made to the server.
   */
  public getQuestions(data) {
    return this.http.get(this.url + "/questions/" + data);
  }

  public postAnswers(data) {
    return this.http.post(this.url + "/questions/answers", data);
  }

  public getAnswers(id) {
    return this.http.get(this.url + "/questions/answers/" + id)
  }

  /**
   * Gets content.
   * @param data an object that has what's required.
   * @returns
   * all questions with a http request made to the server.
   */
  public getContent(data) {
    return this.http.get(this.url + "/content/" + data);
  }

  /**
   * Checks if the domain is available.
   * @param domain
   * @returns
   * all results about the domain with a http request
   * made to the server.
   */
  public postDomain(domain): Observable<any> {
    return this.http.post(this.url + "/domain", domain);
  }

  /**
   * Updates the rate of a business idea.
   * @param data an object that has what's required.
   * @returns
   * updated rate with a http request made to the server.
   */
  public updateRatings(data) {
    return this.http.post(this.url + "/ideas/rate", data);
  }

  /**
   * Start tracking.
   * @param data an object that has what's required.
   * @returns
   * Added the tracking with a http request made to the server.
   */
  public start(data) {
    return this.http.post(this.url + "/users/start", data);
  }

  /**
   * Updates user's progress.
   * @param data an object that has what's required.
   * @returns
   * Updated user's progress with a http request made to the server.
   */
  public tracking(data) {
    return this.http.post(this.url + "/users/track", data);
  }

  /**
   * Updates  user's status.
   * @param data an object that has what's required.
   * @returns
   * Updated user's status with a http request made to the server.
   */
  public notNewUers(data) {
    return this.http.post(this.url + "/users/notnew", data);
  }

  /**
   * Gets  user's link.
   * @param data an object that has what's required.
   * @returns
   * List user's link with a http request made to the server.
   */
  public getLink(data) {
    return this.http.get(this.url + "/users/link/" + data);
  }

  /**
   * Updates user's key.
   * @param data an object that has what's required.
   * @returns
   * Updated user's key with a http request made to the server.
   */
  public accessKey(data) {
    return this.http.post(this.url + "/users/dashboard/update", data);
  }

  /**
   * Insert user's first key.
   * @param data an object that has what's required.
   * @returns
   * Inserted user's key with a http request made to the server.
   */
  public firstKey(data) {
    return this.http.post(this.url + "/users/dashboard/first", data);
  }

  /**
   * Gets user's key.
   * @param data an object that has what's required.
   * @returns
   * List user's key with a http request made to the server.
   */
  public getKey(data) {
    return this.http.get(this.url + "/users/dashboard/" + data);
  }
}