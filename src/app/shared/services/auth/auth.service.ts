import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// Configuration
import { config } from "../../../app.config";

@Injectable()
export class AuthService {

  private AUTH_API_URL: string = config.backendAUTH_API_URL;

  private NAME_KEY: string = 'name';

  private ID_KEY: string = '_id';

  private TOKEN_KEY: string = 'token';

  constructor(private http: HttpClient,
              private router: Router) { }

  public get name(): string {
    return localStorage.getItem(this.NAME_KEY);
  }

  public get id(): string {
    return localStorage.getItem(this.ID_KEY);
  }

  public get isAuthenticated(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public set isAuthenticated(value: boolean) {
    // empty implementation just for the purposes of testing
  }

  public registerUser(user: any): any {
    console.log(`create user: ${user.firstname}...`);

    this.http.post(`${this.AUTH_API_URL}/register`, user).subscribe(
      (res) => {
        this._authenticate(res);
      },
      (error) => {
        console.log('500 - server error');
      });
  }

  public login(user: any): any {
    console.log(`authenticating user: ${user.username}...`);

    this.http.post(`${this.AUTH_API_URL}/login`, user).subscribe(
      (res) => {
        this._authenticate(res);
      },
      (error) => {
        console.log('500 - server error');
      });
  }

  public logout(): void {
    localStorage.removeItem(this.NAME_KEY);
    localStorage.removeItem(this.ID_KEY);
    localStorage.removeItem(this.TOKEN_KEY);

    this.router.navigate(['/login']);
  }

  private _authenticate(res): void {
    let authResponse = res;

    if (!authResponse.token) {
      console.log(authResponse.message);
      return;
    }

    localStorage.setItem(this.TOKEN_KEY, authResponse.token);
    localStorage.setItem(this.ID_KEY, authResponse._id);
    localStorage.setItem(this.NAME_KEY, authResponse.firstname);

    this.router.navigate(['/']);
  }

}
