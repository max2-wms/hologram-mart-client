import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Services
import { AuthService } from "../../shared/services/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router,
              private authService: AuthService,
              private fb: FormBuilder) { 
    this.loginForm = this.fb.group({
      username: [''],
      password: [''],
    });
  }

  ngOnInit() {
    if (this.authService.isAuthenticated) {
      this.router.navigate(['/holograms']);
    }
  }

  onSubmit(form: any): void {
    this.authService.login(this.loginForm.value);
  }

}
