import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Configuration
import { config } from "../../../app.config";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API_URL: string = config.backendAPI_URL;

  constructor(private http: HttpClient) { }

  public getUsers(): any {
    return this.http.get(`${this.API_URL}/users`);
  }

  public getUser(userid: any): any {
    return this.http.get(`${this.API_URL}/users/${userid}`);
  }
}
